#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_ROOT = path.join(ROOT, "content", "technical");
const REVIEW_DATE = "2026-07-17";

const LEGACY = {
  architecture: path.join(ROOT, "documents", "agent-md", "main-enterprise-architecture-v1.md"),
  contracts: path.join(ROOT, "documents", "agent-md", "api-socket-contract-specification-v1.md"),
  data: path.join(ROOT, "documents", "agent-md", "data-model-prisma-schema-planning-v1.md"),
  providers: path.join(ROOT, "documents", "agent-md", "provider-integration-cost-control-v1.md"),
  screens: path.join(ROOT, "documents", "agent-md", "screen-to-feature-map-v1.md"),
  referral: path.join(ROOT, "content", "contracts", "referral-contract-group.md"),
  kyc: path.join(ROOT, "content", "pilots", "contracts", "kyc-review-contract-group.md"),
};

function read(file) {
  return fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

function cleanCell(value) {
  return String(value)
    .replace(/<[^>]+>/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/-\s*>/g, "→")
    .replace(/\\>/g, ">")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function splitRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cleanCell);
}

function isSeparator(line) {
  const cells = splitRow(line);
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function extractTables(raw) {
  const lines = raw.split("\n");
  const tables = [];
  let heading = "General";

  for (let index = 0; index < lines.length; index += 1) {
    const headingMatch = lines[index].match(/^#{2,4}\s+(.+)$/);
    if (headingMatch) heading = cleanCell(headingMatch[1]);

    if (!lines[index].trim().startsWith("|") || !isSeparator(lines[index + 1] || "")) continue;
    const headers = splitRow(lines[index]);
    const rows = [];
    index += 2;
    while (index < lines.length && lines[index].trim().startsWith("|")) {
      const cells = splitRow(lines[index]);
      if (cells.length === headers.length) {
        rows.push(Object.fromEntries(headers.map((header, cellIndex) => [header.toLowerCase(), cells[cellIndex]])));
      }
      index += 1;
    }
    tables.push({ heading, headers: headers.map((header) => header.toLowerCase()), rows });
    index -= 1;
  }

  return tables;
}

function slug(value) {
  return cleanCell(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function titleCase(value) {
  return value.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function domainForEndpoint(endpoint, heading) {
  if (/^\/(auth|me)\b/.test(endpoint)) return "Identity and sessions";
  if (/^\/(kyc|admin\/kyc)\b/.test(endpoint)) return "Tasker activation and KYC";
  if (/^\/(catalog|admin\/catalog)\b/.test(endpoint)) return "Catalog and coverage";
  if (/^\/task-owner\/tasks\/drafts|location|media|payment-intent/.test(endpoint)) return "Task creation";
  if (/candidates|interest|direct-offers|favorites|tasker\/tasks$/.test(endpoint)) return "Matching";
  if (/tasker\/tasks|confirm-completion|broadcast|rebook|cancel/.test(endpoint)) return "Task execution";
  if (/payments|escrow|webhooks\/(paystack|moniepoint)/.test(endpoint)) return "Payments and escrow";
  if (/wallet|withdrawal|payout/.test(endpoint)) return "Wallets and payouts";
  if (/report|rating|risk/.test(endpoint)) return "Reports and risk";
  if (/support|communication|voice|call|notification/.test(endpoint)) return "Communication and support";
  if (/^\/admin/.test(endpoint)) return "Admin operations";
  if (/health|ready|metrics|version/.test(endpoint)) return "System operations";
  return heading.replace(/\bAPIs?\b/gi, "").trim() || "General";
}

function contractSource() {
  const raw = read(LEGACY.contracts);
  const tables = extractTables(raw);
  const recordsByKey = new Map();
  let restCounter = 0;
  let socketCounter = 0;
  let webhookCounter = 0;
  let jobCounter = 0;

  function add(record, key) {
    const existing = recordsByKey.get(key);
    if (!existing || record.authorityLevel > existing.authorityLevel) recordsByKey.set(key, record);
  }

  for (const table of tables) {
    if (table.headers.includes("method") && table.headers.includes("path")) {
      for (const row of table.rows) {
        const method = cleanCell(row.method).toUpperCase();
        const endpoint = cleanCell(row.path);
        if (!/^(GET|POST|PATCH|PUT|DELETE)$/.test(method) || !endpoint.startsWith("/")) continue;
        restCounter += 1;
        add({
          id: `API-${String(restCounter).padStart(3, "0")}`,
          type: "endpoint",
          title: `${method} ${endpoint}`,
          domain: domainForEndpoint(endpoint, table.heading),
          status: "provisional",
          summary: row.purpose || `Supports ${table.heading}.`,
          facts: [
            { label: "Method and path", value: `${method} ${endpoint}` },
            { label: "Actor", value: row.actor || "Not recorded" },
            { label: "Authentication", value: row.auth || "Not recorded" },
            { label: "Idempotency", value: row.idempotency || "Not recorded" },
            { label: "Flow references", value: row["flow refs"] || "Requires standalone-flow traceability review" },
            { label: "Implementation status", value: "Planned / not verified against running code" },
          ],
          rules: [
            row.notes || "Use the shared contract, security, response and error standards.",
            "Durable state changes remain REST operations; clients do not infer success from redirects or socket delivery.",
          ],
          dependencies: [row["flow refs"] || table.heading],
          gaps: [
            "Request and response component schemas require explicit review before implementation.",
            "Endpoint-to-model traceability must be confirmed where the legacy table did not name records.",
          ],
          source: "Legacy API and Socket Contract Specification v1, migrated as provisional evidence",
          authority: "Main Enterprise Architecture and approved standalone flows",
          authorityLevel: 1,
          method,
          path: endpoint,
          actor: row.actor || "Not recorded",
          auth: row.auth || "Not recorded",
          idempotency: row.idempotency || "Not recorded",
        }, `rest:${method}:${endpoint}`);
      }
    }

    if (table.headers.includes("namespace") && table.headers.includes("event")) {
      for (const row of table.rows) {
        socketCounter += 1;
        const namespace = row.namespace;
        const event = row.event;
        add({
          id: `SOCKET-${String(socketCounter).padStart(3, "0")}`,
          type: "socket-event",
          title: `${namespace} · ${event}`,
          domain: "Communication and realtime",
          status: "provisional",
          summary: row.purpose,
          facts: [
            { label: "Namespace", value: namespace },
            { label: "Event", value: event },
            { label: "Direction", value: row.direction },
            { label: "Actors", value: row["used by"] },
            { label: "Persistence", value: row.persistence },
          ],
          rules: [
            "Socket delivery is never the sole source of durable business truth.",
            "After reconnect, clients rejoin authorized rooms and reconcile through REST.",
          ],
          dependencies: ["Authorized socket session", row.persistence],
          gaps: ["Payload schema and acknowledgement errors require explicit review before implementation."],
          source: "Legacy API and Socket Contract Specification v1",
          authority: "Main Enterprise Architecture and approved flows",
          authorityLevel: 1,
        }, `socket:${namespace}:${event}`);
      }
    }

    if (table.headers.includes("provider") && table.headers.includes("endpoint") && table.headers.includes("primary events")) {
      for (const row of table.rows) {
        webhookCounter += 1;
        const endpoint = row.endpoint;
        add({
          id: `WEBHOOK-${String(webhookCounter).padStart(3, "0")}`,
          type: "webhook",
          title: `POST ${endpoint}`,
          domain: "Providers, webhooks, queues and jobs",
          status: "provisional",
          summary: `Receives ${row["primary events"]} from ${row.provider}.`,
          facts: [
            { label: "Provider", value: row.provider },
            { label: "Endpoint", value: endpoint },
            { label: "Validation", value: row.validation },
            { label: "Idempotency key", value: row["idempotency key"] },
            { label: "Processing", value: row["processing rule"] },
          ],
          rules: [
            "Treat provider callbacks as untrusted until signature, duplicate and state-transition checks pass.",
            "Persist accepted events before asynchronous processing.",
          ],
          dependencies: [row.provider, "ProviderWebhookEvent", "Queue worker"],
          gaps: ["Provider-specific request schema and signature test vectors require sandbox evidence."],
          source: "Legacy API and Socket Contract Specification v1",
          authority: "Main Enterprise Architecture and provider validation",
          authorityLevel: 1,
          method: "POST",
          path: endpoint,
          actor: row.provider,
          auth: "Provider signature",
          idempotency: row["idempotency key"],
        }, `rest:POST:${endpoint}`);
      }
    }

    if (table.headers.includes("queue") && table.headers.includes("producer") && table.headers.includes("consumers")) {
      for (const row of table.rows) {
        jobCounter += 1;
        add({
          id: `JOB-${String(jobCounter).padStart(3, "0")}`,
          type: "queue",
          title: row.queue,
          domain: "Providers, webhooks, queues and jobs",
          status: "provisional",
          summary: row.purpose,
          facts: [
            { label: "Producer", value: row.producer },
            { label: "Consumer", value: row.consumers },
            { label: "Idempotent", value: row["must be idempotent"] },
          ],
          rules: [
            "Queue payloads contain stable IDs and correlation metadata, not secrets or large provider payloads.",
            "Retries must preserve idempotency and record terminal failure evidence.",
          ],
          dependencies: ["BullMQ", "Valkey", row.consumers],
          gaps: ["Retry count, backoff, dead-letter and alert thresholds require operational confirmation."],
          source: "Legacy API and Socket Contract Specification v1",
          authority: "Main Enterprise Architecture",
          authorityLevel: 1,
        }, `queue:${row.queue}`);
      }
    }
  }

  function mergeApproved(file, authority, sourceName) {
    const approvedRaw = read(file);
    const lines = approvedRaw.split("\n");
    for (let index = 0; index < lines.length; index += 1) {
      const match = lines[index].match(/^##\s+(GET|POST|PATCH|PUT|DELETE)\s+(.+?)(?:\s+referral extension)?$/);
      if (!match) continue;
      const method = match[1];
      let endpoint = cleanCell(match[2]).replace(/\s+referral extension$/, "");
      if (!endpoint.startsWith("/")) continue;
      let purpose = "";
      for (let cursor = index + 1; cursor < Math.min(lines.length, index + 18); cursor += 1) {
        if (/^##\s+/.test(lines[cursor])) break;
        if (/^###\s+Business purpose/.test(lines[cursor])) {
          for (let paragraph = cursor + 1; paragraph < lines.length; paragraph += 1) {
            if (lines[paragraph].trim()) {
              purpose = cleanCell(lines[paragraph]);
              break;
            }
          }
          break;
        }
      }
      const existing = recordsByKey.get(`rest:${method}:${endpoint}`);
      restCounter += 1;
      add({
        id: existing?.id || `API-${String(restCounter).padStart(3, "0")}`,
        type: "endpoint",
        title: `${method} ${endpoint}`,
        domain: domainForEndpoint(endpoint, sourceName),
        status: "approved-reference",
        summary: purpose || `Approved contract record from ${sourceName}.`,
        facts: [
          { label: "Method and path", value: `${method} ${endpoint}` },
          { label: "Authority", value: authority },
          { label: "Detailed contract", value: sourceName },
          { label: "Implementation status", value: "Approved contract; implementation not verified" },
        ],
        rules: [
          "Use the complete request, response, permission, concurrency, idempotency and error rules in the approved source.",
          "This approved record overrides the less-specific legacy contract table.",
        ],
        dependencies: [sourceName, "Approved standalone flows"],
        gaps: ["OpenAPI component schemas must be completed from the approved examples before generated clients are treated as final."],
        source: sourceName,
        authority,
        authorityLevel: 3,
        method,
        path: endpoint,
        actor: endpoint.startsWith("/admin") ? "Admin" : endpoint.startsWith("/auth") ? "Unauthenticated registration" : "Signed-in user",
        auth: endpoint.startsWith("/admin") ? "TOTP-authenticated Admin session and named permission" : endpoint.startsWith("/auth") ? "Registration rules" : "Access token",
        idempotency: method === "GET" ? "Read-only" : "See approved source",
      }, `rest:${method}:${endpoint}`);
    }
  }

  mergeApproved(
    LEGACY.referral,
    "Approved CONTRACT-REFERRAL-001 decision",
    "Referral Contract Group",
  );
  mergeApproved(
    LEGACY.kyc,
    "Approved Phase 1 KYC review contract decision",
    "KYC Review Contract Group",
  );

  const records = [...recordsByKey.values()]
    .sort((left, right) => `${left.domain}:${left.title}`.localeCompare(`${right.domain}:${right.title}`))
    .map(({ authorityLevel, ...record }) => record);

  return {
    id: "TECH-CONTRACTS-001",
    slug: "contracts",
    title: "API, Socket and OpenAPI Reference",
    description: "One implementation reference for REST endpoints, socket events, provider callbacks and worker queues. Records are independently linkable; unresolved shapes are explicit blockers rather than implied permission to guess.",
    audience: "Mobile, Admin, Backend, QA and AI agents",
    owner: "Backend Lead",
    reviewers: ["Technical Lead", "Mobile Lead", "Admin Lead", "QA"],
    status: "in-review",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Approved standalone flows, approved contract decisions and provisional Main Enterprise Architecture",
    sourceNotes: [
      "Approved referral and KYC decisions override the wider provisional legacy table.",
      "A provisional record describes the intended boundary but may still contain named request, response or model gaps.",
    ],
    sharedRules: [
      "Do not invent a path, DTO, field, permission, error, provider behavior or state transition.",
      "REST and persisted records remain the source of truth for durable state changes.",
      "Frontend payment redirects are not final payment proof.",
      "Direct offers use REST and normal notifications, not sockets.",
      "Referral has no public credit mutation and no referral socket.",
    ],
    records,
  };
}

function extractPrismaModels(raw) {
  const models = new Map();
  const pattern = /^\s{4}model\s+([A-Za-z][A-Za-z0-9]*)\s+\{\n([\s\S]*?)^\s{4}\}/gm;
  let match;
  while ((match = pattern.exec(raw))) {
    models.set(match[1], `model ${match[1]} {\n${match[2].replace(/^ {4}/gm, "")}}`);
  }
  return models;
}

function dataSource() {
  const raw = read(LEGACY.data);
  const tables = extractTables(raw);
  const groupTable = tables.find((table) => table.heading === "Model Groups");
  const entityTable = tables.find((table) => table.heading === "Core Entity Catalogue");
  const enumTable = tables.find((table) => table.heading === "Enum And State Catalogue");
  const schemaModels = extractPrismaModels(raw);
  const entityDetails = new Map((entityTable?.rows || []).map((row) => [row.model, row]));
  const records = [];
  const domainMap = {
    Identity: "Identity and access",
    Tasker: "Tasker activation and KYC",
    Catalog: "Catalog and coverage",
    Task: "Task marketplace",
    Finance: "Wallet, escrow and payouts",
    Communication: "Communication and support",
    Risk: "Risk and trust",
    Referral: "Risk and trust",
    Admin: "Admin and operations",
    Operations: "Providers and jobs",
  };

  for (const row of groupTable?.rows || []) {
    const group = row.group;
    const domain = domainMap[group] || group;
    const models = row.models.split(",").map((model) => model.trim()).filter(Boolean);
    models.forEach((model, index) => {
      const detail = entityDetails.get(model);
      const schema = schemaModels.get(model);
      const sensitive = /User|Credential|Session|Kyc|Wallet|Ledger|Payment|Payout|Withdrawal|Address|Location|Call|Message|Report|Risk|Audit/.test(model)
        ? "Sensitive or restricted; apply least privilege and audit rules"
        : "Internal application data; confirm field-level classification";
      const approvedKycAttempt = model === "KycAttempt";
      records.push({
        id: `MODEL-${slug(group).toUpperCase()}-${String(index + 1).padStart(2, "0")}`,
        type: "data-model",
        title: model,
        domain,
        status: approvedKycAttempt ? "approved-reference" : schema ? "execution-baseline" : "planned",
        summary: detail?.responsibility || `${model} supports the ${domain.toLowerCase()} domain.`,
        facts: [
          { label: "Business responsibility", value: detail?.responsibility || `Persist the authoritative ${titleCase(model)} record for ${domain}.` },
          { label: "Important rule", value: detail?.["important rule"] || "Only the owning backend module writes this model directly." },
          { label: "Owning domain", value: domain },
          { label: "Sensitive-data classification", value: sensitive },
          { label: "Schema status", value: approvedKycAttempt ? "Approved KYC pilot definition" : schema ? "Legacy Prisma execution baseline exists" : "Conceptual model; executable schema not yet recorded" },
        ],
        rules: [
          "Durable state lives in PostgreSQL; Valkey is not the authoritative record.",
          "State-changing writes require transaction, idempotency and audit behavior appropriate to the domain.",
          detail?.["important rule"] || "Preserve domain ownership and historical integrity.",
        ],
        dependencies: [domain, approvedKycAttempt ? "Approved KYC data-domain pilot" : "Related contract and flow records"],
        gaps: schema
          ? ["Confirm every field, relation, retention rule and migration against the implementation before applying Prisma migrations."]
          : ["Executable fields, relations, indexes, retention and migration are not fully defined; implementation is blocked until resolved."],
        source: approvedKycAttempt
          ? "Approved Phase 1 KYC data-domain pilot merged with the legacy data baseline"
          : "Legacy Data Model and Prisma Schema Planning v1",
        schema: schema || null,
      });
    });
  }

  for (const [index, row] of (enumTable?.rows || []).entries()) {
    records.push({
      id: `ENUM-${String(index + 1).padStart(2, "0")}`,
      type: "enum",
      title: row.enum,
      domain: "Shared state vocabulary",
      status: "execution-baseline",
      summary: row.purpose,
      facts: [
        { label: "Values", value: row.values },
        { label: "Purpose", value: row.purpose },
        { label: "Change rule", value: "Additions require contract review; renames require data migration and consumer coordination." },
      ],
      rules: [
        row.enum === "UserMode" ? "The field name is mode; activeMode is forbidden." : "Use the same value in API, database, frontend and QA references.",
      ],
      dependencies: ["Contracts", "Flows", "QA"],
      gaps: ["Confirm values against every approved flow before schema freeze."],
      source: "Legacy Data Model and Prisma Schema Planning v1",
    });
  }

  return {
    id: "TECH-DATA-001",
    slug: "data",
    title: "Data Model Reference",
    description: "A business-first catalogue of models, enums, ownership, privacy and schema readiness. Conceptual records and executable Prisma baselines are clearly distinguished.",
    audience: "Backend, Admin, QA, Security and AI agents",
    owner: "Backend Lead",
    reviewers: ["Technical Lead", "Data owner", "Security and Privacy"],
    status: "in-review",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Approved contracts and flows, with the provisional data-model execution baseline",
    sourceNotes: [
      "KycAttempt incorporates the approved Phase 1 KYC data-domain reference.",
      "A planned conceptual model is not permission to invent fields or apply a migration.",
    ],
    sharedRules: [
      "Use mode, never activeMode.",
      "Keep one User account; Task Owner and Tasker responsibilities remain explicit.",
      "Keep Task Owner and Tasker wallets as separate records.",
      "Ledger entries are immutable evidence; a cached balance is never the only money truth.",
      "Exact addresses, KYC evidence, phone numbers and payment secrets require restricted access.",
    ],
    records: records.sort((left, right) => `${left.domain}:${left.title}`.localeCompare(`${right.domain}:${right.title}`)),
  };
}

function providerFailure(category, provider) {
  if (/Payment|Payout/i.test(category)) return "Keep payment or payout pending; reconcile authoritative provider state and never report money success early.";
  if (/KYC/i.test(category)) return "Keep KYC pending or route to manual review; never activate a Tasker from client or callback text alone.";
  if (/Maps/i.test(category)) return "Use cached coordinates or last permitted ETA and disable paid refresh until the budget/provider guard recovers.";
  if (/Push|SMS|Email/i.test(category)) return "Persist the notification outcome and allow the app to fetch authoritative state when delivery fails.";
  if (/Masked Calls/i.test(category)) return "Disable masked calls and retain chat/voice-note alternatives; never reveal real phone numbers.";
  if (/Hosting|Storage|Domain/i.test(category)) return "Enter the relevant incident runbook, protect data integrity and restore only from verified evidence.";
  return `${provider} failure must produce a visible degraded or retryable state with logged evidence.`;
}

function providerFallback(category, provider) {
  if (/Payment|Payout/i.test(category)) return provider.includes("Paystack") ? "Moniepoint when validated and enabled" : "Paystack when validated and enabled";
  if (/Email/i.test(category)) return provider === "Resend" ? "SendGrid after deferred-provider validation" : "Resend";
  if (/Masked Calls/i.test(category)) return "Feature disablement, then the next validated provider candidate; chat remains available";
  if (/SMS/i.test(category)) return "Email remains primary; support path for critical account recovery";
  if (/Maps/i.test(category)) return "Cached result, manual address/pin confirmation and guarded later retry";
  return "No automatic provider swap unless the adapter, product state and operations approval explicitly allow it";
}

function platformSource() {
  const providerRaw = read(LEGACY.providers);
  const tables = extractTables(providerRaw);
  const registry = tables.find((table) => table.heading === "Provider Registry");
  const providerRecords = (registry?.rows || []).map((row, index) => ({
    id: `PROVIDER-${String(index + 1).padStart(2, "0")}`,
    type: "provider",
    title: row.provider,
    domain: row.category,
    status: /Active|Selected/i.test(row.status) ? "selected-unverified" : /Deferred/i.test(row.status) ? "deferred" : "candidate",
    summary: row.role,
    facts: [
      { label: "Work2Cash use", value: row["work2cash usage"] },
      { label: "Selection status", value: row.status },
      { label: "Owner", value: /Hosting|Storage|Domain|Monitoring/i.test(row.category) ? "Infrastructure Lead" : "Backend Lead" },
      { label: "Sandbox validation", value: "Evidence not recorded in the migrated baseline" },
      { label: "Production validation", value: "Not approved by this migration" },
      { label: "Pricing", value: "Legacy July 2026 baseline only; verify against an official source before spend or go-live" },
    ],
    rules: [
      row["execution note"],
      "Use a provider adapter; controllers and use cases do not call provider SDKs directly.",
      "Never commit keys, secrets, raw provider payloads or production credentials.",
    ],
    dependencies: ["Provider adapter", "ProviderRequestLog", "Feature/config guard", "Operations owner"],
    gaps: [
      "Official pricing URL, verification date, sandbox evidence and production approval are required before go-live.",
      "Confirm data-processing, retention, webhook/signature and support-escalation terms.",
    ],
    recovery: {
      failure: providerFailure(row.category, row.provider),
      fallback: providerFallback(row.category, row.provider),
      disablement: "Disable when signature/security validation fails, costs exceed guardrails, reliability is unsafe or the responsible owner declares an incident.",
    },
    source: "Legacy Provider Integration and Cost Control v1; commercial facts require revalidation",
  }));

  const architectureRecords = [
    {
      id: "ARCH-01",
      type: "architecture",
      title: "System context and responsibility boundary",
      domain: "Architecture",
      status: "provisional-baseline",
      summary: "Flutter mobile and Next.js Admin consume a NestJS API. PostgreSQL owns durable truth; Valkey supports cache, presence, geospatial lookup, queues and socket scaling; workers own background processing; object storage holds controlled media and backup artifacts.",
      facts: [
        { label: "Mobile", value: "Flutter application for Task Owner and Tasker modes" },
        { label: "Admin", value: "Next.js operations dashboard with TOTP and RBAC" },
        { label: "Backend", value: "NestJS hexagonal modules, REST, Socket.IO, workers and scheduler" },
        { label: "Durable data", value: "PostgreSQL" },
        { label: "Transient/fast state", value: "Valkey and BullMQ" },
      ],
      rules: ["Provider adapters remain outside core use cases.", "Socket and cache state never replace persisted business truth."],
      dependencies: ["Approved architecture decisions", "Contracts", "Data model"],
      gaps: ["Formal architecture approval remains pending."],
      source: "Main Enterprise Architecture v1",
    },
    {
      id: "ARCH-02",
      type: "architecture",
      title: "Production topology",
      domain: "Infrastructure",
      status: "provisional-baseline",
      summary: "The provisional production baseline separates application, data and monitoring responsibilities and uses S3-compatible object storage. Exact network diagrams, region, sizing and failover require infrastructure approval before provisioning.",
      facts: [
        { label: "Application plane", value: "API, socket gateway, workers and reverse proxy" },
        { label: "Data plane", value: "PostgreSQL and privately reachable Valkey" },
        { label: "Monitoring plane", value: "Logs, metrics, alerts and Sentry integration" },
        { label: "Storage", value: "DigitalOcean Spaces or approved S3-compatible object storage" },
      ],
      rules: ["PostgreSQL and Valkey are not publicly exposed.", "Use TLS, hardened SSH, least privilege, firewall rules and separated secrets."],
      dependencies: ["DigitalOcean production baseline", "DNS/TLS inventory", "Backup and restore runbooks"],
      gaps: ["Approved region, IP plan, firewall matrix, capacity test and failover design are not recorded."],
      source: "Main Enterprise Architecture v1 and Provider Integration baseline",
    },
    {
      id: "ARCH-03",
      type: "architecture",
      title: "Staging topology",
      domain: "Infrastructure",
      status: "provisional-baseline",
      summary: "Staging uses isolated infrastructure, sandbox provider credentials and synthetic data. It must never contain production user, KYC, payment or secret material.",
      facts: [
        { label: "Host baseline", value: "Contabo staging baseline recorded in July 2026; revalidate before purchase" },
        { label: "Provider mode", value: "Sandbox or test credentials only" },
        { label: "Data", value: "Synthetic or explicitly approved non-production data" },
        { label: "Backups", value: "Off-server backup required because legacy baseline did not include automatic backup" },
      ],
      rules: ["Production keys and personal data are forbidden in staging.", "Run restore drills before declaring backup readiness."],
      dependencies: ["Infrastructure owner", "Provider sandboxes", "Deployment and restore runbooks"],
      gaps: ["Private network availability, exact retention and environment access roster require approval."],
      source: "Main Enterprise Architecture v1 and Provider Integration baseline",
    },
    {
      id: "ARCH-04",
      type: "architecture",
      title: "Network, DNS, TLS and secret boundaries",
      domain: "Infrastructure",
      status: "decision-required",
      summary: "Public entry points terminate TLS at controlled reverse proxies; data services remain private. Secrets belong in protected environment/secret storage and are never stored in this documentation repository.",
      facts: [
        { label: "Public surfaces", value: "API, Socket and Admin hosts" },
        { label: "Private services", value: "PostgreSQL, Valkey, workers' internal control paths and backup credentials" },
        { label: "Secret rule", value: "Environment/secret store only; least privilege and rotation evidence required" },
      ],
      rules: ["No database or Valkey public exposure.", "Separate staging and production credentials.", "Audit privileged access and secret rotation."],
      dependencies: ["DNS owner", "Infrastructure owner", "Security reviewer"],
      gaps: ["DNS registrar roles, TLS renewal ownership, firewall ports, VPN/private access and rotation schedule require explicit records."],
      source: "Main Enterprise Architecture v1",
    },
    {
      id: "ARCH-05",
      type: "architecture",
      title: "Monitoring, capacity and cost controls",
      domain: "Operations",
      status: "provisional-baseline",
      summary: "Monitor API/socket health, provider calls, payment reconciliation, queues, PostgreSQL, Valkey, backups and budget consumption. Alerts must name an owner and lead to a runbook.",
      facts: [
        { label: "Core signals", value: "Availability, latency, error rate, queue age/failure, database saturation, Valkey memory/eviction, backup freshness" },
        { label: "Provider signals", value: "Request count, duration, failure, duplicate events and estimated cost where known" },
        { label: "Cost trigger", value: "Unexpected usage or spend requires feature/config review before scaling" },
      ],
      rules: ["Paid provider calls require budget logging and guards.", "No paid auto-refresh loops.", "An alert without ownership and recovery action is incomplete."],
      dependencies: ["Monitoring owner", "Provider catalogue", "Incident runbooks"],
      gaps: ["Final thresholds, paging rota, dashboards and capacity-test evidence require operational approval."],
      source: "Main Enterprise Architecture v1 and Provider Integration baseline",
    },
    {
      id: "ARCH-06",
      type: "architecture",
      title: "Disaster recovery policy",
      domain: "Recovery",
      status: "provisional-baseline",
      summary: "Recovery prioritizes data integrity, authoritative money state and controlled restoration. Off-server PostgreSQL backups and tested restore procedures are mandatory; server disks alone are not backups.",
      facts: [
        { label: "Restore drills", value: "Weekly in staging and monthly after launch in the provisional baseline" },
        { label: "Evidence", value: "Backup ID, checksum, restore target, duration, validation result and owner" },
        { label: "Priority", value: "PostgreSQL and money/audit truth before caches, queues or derived views" },
      ],
      rules: ["Never restore over production without incident authority and a verified recovery point.", "Rebuild transient Valkey state from durable records where possible."],
      dependencies: ["PostgreSQL backup/restore runbooks", "Object storage", "Incident commander"],
      gaps: ["Approved RPO, RTO, backup encryption/key ownership and regional recovery design require formal approval."],
      source: "Main Enterprise Architecture v1",
    },
  ];

  const runbooks = [
    ["RUNBOOK-01", "Deployment", "Release owner", "Deploy an approved artifact after checks and migration review.", "Stop and rollback if health, migrations or smoke tests fail."],
    ["RUNBOOK-02", "Rollback", "Release owner", "Freeze further rollout, preserve evidence and restore the last verified application artifact.", "Never reverse an irreversible database change without a reviewed recovery plan."],
    ["RUNBOOK-03", "PostgreSQL backup", "Infrastructure Lead", "Create encrypted off-server backup, verify completion/checksum and record freshness.", "Alert on failure or staleness; server-local files alone do not count."],
    ["RUNBOOK-04", "PostgreSQL restore", "Infrastructure Lead", "Restore into an isolated target, validate schema and critical money/audit records, then obtain cutover authority.", "Do not overwrite production as the first restore test."],
    ["RUNBOOK-05", "Provider outage", "Backend Lead", "Mark the provider degraded, preserve pending state, disable unsafe actions and activate only validated fallback.", "Never mark provider work successful because a fallback UI appeared."],
    ["RUNBOOK-06", "Payment reconciliation", "Finance Operations", "Compare provider events, Payment, ledger and escrow records by reference and request ID.", "Apply idempotent correction through governed finance use cases; never edit balances directly."],
    ["RUNBOOK-07", "Queue failure or stalled jobs", "Backend Lead", "Identify affected queue/job age, stop duplicate producers if necessary and replay only idempotent jobs.", "Preserve failed payload references and correlation evidence."],
    ["RUNBOOK-08", "Object-storage failure", "Infrastructure Lead", "Disable unsafe upload paths, retain metadata in retryable state and verify bucket/network/credentials.", "Never expose storage keys or make private evidence public as a workaround."],
    ["RUNBOOK-09", "DNS or certificate incident", "Infrastructure Lead", "Confirm ownership, current records, certificate status and blast radius before controlled correction.", "Protect against unauthorized DNS changes and record every emergency action."],
    ["RUNBOOK-10", "Security incident", "Security Lead", "Contain access, preserve logs, rotate affected secrets and establish incident command.", "Do not delete evidence or publish personal/security details in this repository."],
    ["RUNBOOK-11", "Data-exposure incident", "Privacy and Security Lead", "Stop further exposure, identify affected data/people, preserve evidence and follow notification/legal decision processes.", "Do not copy exposed data into tickets, chat or documentation."],
    ["RUNBOOK-12", "Capacity and cost review", "Infrastructure and Finance", "Review utilization, queue age, provider usage and forecast before resizing or enabling paid features.", "Scaling or provider changes require evidence, owner and budget approval."],
  ].map(([id, title, owner, action, safeState]) => ({
    id,
    type: "runbook",
    title,
    domain: "Operations runbook",
    status: "operational-baseline",
    summary: action,
    facts: [
      { label: "Owner", value: owner },
      { label: "Trigger", value: `${title} is required or its monitoring alert fires.` },
      { label: "Safe state", value: safeState },
      { label: "Evidence", value: "Incident/request ID, actor, timestamps, before/after state, validation result and follow-up owner" },
    ],
    rules: [safeState, "Escalate when authority, data integrity, money state, security or recovery evidence is uncertain."],
    dependencies: ["Monitoring/alert", "Named owner", "Relevant architecture/provider record"],
    gaps: ["Commands, hostnames, credentials and production-specific contacts belong in protected operational systems, not this public repository."],
    source: "Phase 4 operational migration based on the provisional architecture baseline",
  }));

  return {
    id: "TECH-PLATFORM-001",
    slug: "platform",
    title: "Platform Architecture and Operations",
    description: "Architecture, infrastructure, providers, cost controls, disaster recovery and incident runbooks in one role-filtered reference.",
    audience: "Infrastructure, Backend, Security, Finance, Operations and AI agents",
    owner: "Technical Lead",
    reviewers: ["Infrastructure Lead", "Backend Lead", "Security", "Finance", "Operations"],
    status: "in-review",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Provisional Main Enterprise Architecture and validated provider decisions",
    sourceNotes: [
      "Commercial prices and provider capabilities are not approved by migration alone; official evidence is required before spend or go-live.",
      "Production commands, credentials, personal contacts and confidential incident data must remain outside this public repository.",
    ],
    sharedRules: [
      "PostgreSQL is durable truth; Valkey, queues and sockets are recoverable supporting systems.",
      "Staging uses sandbox credentials and no production personal data.",
      "External providers are accessed through adapters with logging, idempotency and disablement controls.",
      "Backups require off-server storage and successful restore evidence.",
      "No paid provider auto-refresh loops.",
    ],
    records: [...architectureRecords, ...providerRecords, ...runbooks],
  };
}

function correctScreen(name, purpose, requirement, notes) {
  let correctedPurpose = purpose;
  let correctedRequirement = requirement;
  let correctedNotes = notes;

  if (/Home quick task/i.test(name)) {
    correctedPurpose = "Select one of the approved MVP categories: Home, Errands, Office or Support.";
  }
  if (/Create account/i.test(name)) {
    correctedPurpose = purpose.replace(/optional social login/i, "approved Google or Apple sign-in where available");
    correctedNotes = `${notes || ""} Facebook login is excluded.`.trim();
  }
  if (/Verify identity|Selfie capture|ID upload/i.test(name)) {
    correctedPurpose = "Complete the accepted Smile ID NIN/BVN and biometric Tasker-verification path.";
    correctedRequirement = "KYC verification and attempt records, Smile ID adapter, consent, safe evidence references and status tracking.";
    correctedNotes = "Generic document upload is not the primary MVP identity path.";
  }
  if (/Make payment/i.test(name)) {
    correctedPurpose = "Use cardless-first Paystack or Moniepoint options such as bank transfer, virtual account or USSD, with wallet where eligible.";
    correctedNotes = "Card-entry-first UX is forbidden; backend webhook/reconciliation owns final payment truth.";
  }
  if (/Availability/i.test(name)) {
    correctedNotes = `${notes || ""} Tasker auto-accept is excluded.`.trim();
  }
  if (/Task management|Controlled force cancel/i.test(name)) {
    correctedNotes = `${notes || ""} Admin may force-cancel under policy but cannot reassign or select a replacement Tasker.`.trim();
  }

  return { purpose: correctedPurpose, requirement: correctedRequirement, notes: correctedNotes };
}

function screenSource() {
  const raw = read(LEGACY.screens);
  const tables = extractTables(raw);
  const screenTables = tables.filter((table) => table.headers.includes("screen / area") || table.headers.includes("admin module"));
  const records = [];
  const counters = new Map();

  for (const table of screenTables) {
    const isAdmin = table.headers.includes("admin module");
    let lane = "Shared";
    if (/Task Owner/i.test(table.heading)) lane = "Task Owner";
    else if (/Tasker/i.test(table.heading)) lane = "Tasker";
    else if (/Admin/i.test(table.heading) || isAdmin) lane = "Admin";
    const prefix = lane === "Task Owner" ? "OWNER" : lane.toUpperCase().replace(/\s+/g, "-");
    const count = counters.get(prefix) || 0;

    table.rows.forEach((row, rowIndex) => {
      const name = row["screen / area"] || row["admin module"];
      const purpose = row["feature meaning"];
      const requirement = row["backend / product requirement"] || row["backend requirement"];
      const notes = row.notes || row.priority || row["access control"] || "";
      const corrected = correctScreen(name, purpose, requirement, notes);
      const access = isAdmin ? row["access control"] : lane;
      records.push({
        id: `SCREEN-${prefix}-${String(count + rowIndex + 1).padStart(2, "0")}`,
        type: "screen",
        title: name,
        domain: lane,
        status: "design-source-required",
        summary: corrected.purpose,
        facts: [
          { label: "Actor", value: lane === "Shared" ? "Signed-out or signed-in user according to the flow" : lane },
          { label: "Purpose", value: corrected.purpose },
          { label: "Backend/product dependency", value: corrected.requirement },
          { label: "Access or priority", value: access || "MVP flow rules" },
          { label: "Design status", value: "Figma file/version and review evidence not recorded" },
          { label: "Implementation status", value: "Not verified by this migration" },
        ],
        rules: [
          corrected.notes || "Follow the approved standalone flow and privacy boundary.",
          "Provide loading, empty, error/retry, permission-denied, submit-in-progress and success states where applicable.",
          "Do not expose exact addresses, full proof media, real phone numbers, KYC evidence or payment secrets without explicit permission.",
        ],
        dependencies: [
          `${lane} approved standalone flows`,
          corrected.requirement,
          "Relevant contract and data-model anchors",
        ],
        gaps: [
          "Exact Figma file, version, previous/next screen mapping and visual acceptance evidence require Design/Product review.",
        ],
        source: "Legacy Screen To Feature Map corrected against approved Phase 0–2 decisions",
      });
    });
    counters.set(prefix, count + table.rows.length);
  }

  return {
    id: "TECH-SCREENS-001",
    slug: "screens",
    title: "Screen-to-Feature Reference",
    description: "A corrected, searchable map of shared, Task Owner, Tasker and Admin screens. Each record states purpose, dependencies, safety rules and unresolved design evidence.",
    audience: "Product, Design, Mobile, Admin, Backend, QA and AI agents",
    owner: "Product Lead",
    reviewers: ["Technical Lead", "Mobile Lead", "Admin Lead", "Backend Lead", "QA"],
    status: "in-review",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Approved standalone flows and accepted product decisions",
    sourceNotes: [
      "Known Facebook, generic KYC upload, old category, card-first, auto-accept and admin-reassignment drift is corrected.",
      "Missing Figma version and screen-transition evidence remains visible as a design-review gap.",
    ],
    sharedRules: [
      "The approved flow controls behavior; a visual mockup cannot silently change product rules.",
      "Use Home, Errands, Office and Support as MVP categories.",
      "Use the Smile ID NIN/BVN and biometric path for Tasker KYC.",
      "Payments are cardless-first through Paystack and Moniepoint; redirects do not prove payment.",
      "Taskers do not auto-accept and Admin cannot reassign tasks.",
    ],
    records,
  };
}

function run() {
  for (const file of Object.values(LEGACY)) {
    if (!fs.existsSync(file)) throw new Error(`Missing migration source: ${path.relative(ROOT, file)}`);
  }
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

  const sources = [contractSource(), dataSource(), platformSource(), screenSource()];
  const metadata = {
    id: "TECH-REF-001",
    title: "Phase 4 Consolidated Technical Reference Library",
    version: "1.0",
    status: "in-review",
    lastReviewed: REVIEW_DATE,
    authority: "Approved flows and decisions, with explicitly marked provisional technical baselines",
    families: sources.map(({ id, slug, title, description }) => ({ id, slug, title, description })),
    legacySources: Object.fromEntries(Object.entries(LEGACY).map(([key, file]) => [key, path.relative(ROOT, file).split(path.sep).join("/")])),
    editRule: "Edit the four JSON family sources after bootstrap; do not rerun this migration script for normal changes.",
  };

  fs.writeFileSync(path.join(OUTPUT_ROOT, "library.json"), JSON.stringify(metadata, null, 2) + "\n");
  for (const source of sources) {
    fs.writeFileSync(path.join(OUTPUT_ROOT, `${source.slug}.json`), JSON.stringify(source, null, 2) + "\n");
  }

  console.log(`Bootstrapped ${sources.length} Phase 4 technical source families with ${sources.reduce((total, source) => total + source.records.length, 0)} independently linkable records.`);
}

try {
  run();
} catch (error) {
  console.error(`Phase 4 source bootstrap failed: ${error.message}`);
  process.exitCode = 1;
}
