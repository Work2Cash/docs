#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_ROOT = path.join(ROOT, "content", "assurance");
const REVIEW_DATE = "2026-07-18";

const LEGACY = {
  qa: path.join(ROOT, "documents", "agent-md", "qa-go-live-readiness-checklist-v1.md"),
  legal: path.join(ROOT, "documents", "agent-md", "legal_user_facing_documents_pack_v1.md"),
  decisions: path.join(ROOT, "documents", "agent-md", "flow-alignment-review-v1.md"),
};

function read(file) {
  return fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
}

function walk(directory, predicate = () => true) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(target, predicate);
    return entry.isFile() && predicate(target) ? [target] : [];
  }).sort();
}

function clean(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/\\>/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function slug(value) {
  return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function splitRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(clean);
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
    if (headingMatch) heading = clean(headingMatch[1]);
    if (!lines[index].trim().startsWith("|") || !isSeparator(lines[index + 1] || "")) continue;
    const headers = splitRow(lines[index]).map((header) => header.toLowerCase());
    const rows = [];
    index += 2;
    while (index < lines.length && lines[index].trim().startsWith("|")) {
      const cells = splitRow(lines[index]);
      if (cells.length === headers.length) rows.push(Object.fromEntries(headers.map((header, cellIndex) => [header, cells[cellIndex]])));
      index += 1;
    }
    tables.push({ heading, headers, rows });
    index -= 1;
  }
  return tables;
}

function parseFrontMatter(file) {
  const raw = read(file);
  const match = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) throw new Error(`${path.relative(ROOT, file)}: missing front matter`);
  const metadata = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator > 0) metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return { raw, metadata, body: match[2] };
}

function section(body, title) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = body.match(new RegExp(`^## ${escaped}\\s*$\\n([\\s\\S]*?)(?=^## |\\Z)`, "m"));
  return match ? match[1].trim() : "";
}

function listItems(value, limit = 6) {
  const items = [];
  for (const line of value.split("\n")) {
    const match = line.match(/^(?:[-*]|\d+\.)\s+(?:\[[ xX]\]\s+)?(.+)$/);
    if (match) {
      const item = clean(match[1]);
      if (item) items.push(item);
    }
  }
  return items.slice(0, limit);
}

function firstText(value, fallback) {
  const list = listItems(value, 1);
  if (list.length) return list[0];
  for (const line of value.split("\n")) {
    if (!line.trim() || /^<|^#|^\|/.test(line.trim())) continue;
    const text = clean(line);
    if (text) return text;
  }
  return fallback;
}

function flowQaRecords() {
  const files = [
    ...walk(path.join(ROOT, "content", "flows", "mobile", "main"), (file) => file.endsWith(".md")),
    ...walk(path.join(ROOT, "content", "flows", "admin", "main"), (file) => file.endsWith(".md")),
  ];

  return files.map((file) => {
    const document = parseFrontMatter(file);
    const id = document.metadata.id;
    const surface = id.startsWith("MF-") ? "Mobile" : "Admin";
    const walkthrough = listItems(section(document.body, "Verbal walkthrough"), 7);
    const branches = listItems(section(document.body, "Decision branches"), 4);
    const recovery = listItems(section(document.body, "Failure and recovery"), 4);
    const acceptance = listItems(section(document.body, "Acceptance criteria"), 5);
    const precondition = firstText(section(document.body, "Before this flow begins"), "Use the flow's documented entry conditions and seeded test identity.");
    const expected = acceptance.length
      ? acceptance.join(" ")
      : firstText(section(document.body, "User-facing result"), "The flow reaches only an allowed ending and persists the authoritative result.");

    return {
      id: `QA-${id}`,
      type: "flow-acceptance-suite",
      title: `${id} — ${document.metadata.title}`,
      domain: `${surface} flow acceptance`,
      status: "not-run",
      summary: `Verify the approved ${document.metadata.title} behavior without relying on hidden context or unapproved shortcuts.`,
      facts: [
        { label: "Flow", value: `${id} — ${document.metadata.title}` },
        { label: "Risk and priority", value: /payment|wallet|kyc|security|risk|cancel|completion|payout/i.test(document.metadata.title) ? "P0/P1 high-risk path" : "P1 core flow" },
        { label: "Owner", value: `${surface} QA with ${surface} and Backend reviewers` },
        { label: "Environment", value: "Staging with sandbox providers and synthetic data" },
        { label: "Build version", value: "Record the exact Mobile/Admin/API build at execution" },
        { label: "Preconditions", value: precondition },
        { label: "Seed data", value: "Use synthetic IDs, permitted media and deterministic provider/test states; never production personal data" },
        { label: "Evidence required", value: "Test run ID, build, timestamps, screenshots/video where useful, request IDs and sanitized logs/provider references" },
        { label: "Execution status", value: "Not Run; update through the release evidence process" },
      ],
      rules: [
        `Happy path: ${walkthrough.length ? walkthrough.join(" → ") : "Follow the approved verbal walkthrough from entry to allowed ending."}`,
        `Decision branches: ${branches.length ? branches.join(" | ") : "Exercise every documented branch and state guard."}`,
        `Recovery: ${recovery.length ? recovery.join(" | ") : "Exercise documented errors, retry, re-entry and safe failure."}`,
        `Expected result: ${expected}`,
        "Record Pass, Fail, Blocked or Not Run. A failure requires severity, defect reference, owner and retest result.",
      ],
      dependencies: [
        `${id} canonical flow source`,
        document.metadata.related || "Relevant contract, model, provider and screen records",
        "Assigned Phase 3 task/week where implementation is scheduled",
      ],
      gaps: ["No execution evidence is recorded by this documentation migration; the suite remains Not Run until a named build is tested."],
      source: path.relative(ROOT, file).split(path.sep).join("/"),
    };
  });
}

function contractQaRecords() {
  const contracts = JSON.parse(read(path.join(ROOT, "content", "technical", "contracts.json")));
  const grouped = new Map();
  for (const record of contracts.records) {
    const list = grouped.get(record.domain) || [];
    list.push(record);
    grouped.set(record.domain, list);
  }
  return [...grouped].sort(([left], [right]) => left.localeCompare(right)).map(([domain, records], index) => ({
    id: `QA-CONTRACT-${String(index + 1).padStart(2, "0")}`,
    type: "contract-suite",
    title: `${domain} contract suite`,
    domain: "Backend contract assurance",
    status: "not-run",
    summary: `Verify ${records.length} ${domain.toLowerCase()} contract records against the implementation and generated OpenAPI baseline.`,
    facts: [
      { label: "Contract domain", value: domain },
      { label: "Records covered", value: String(records.length) },
      { label: "Owner", value: "Backend QA with Mobile/Admin consumer reviewers as applicable" },
      { label: "Environment", value: "Automated contract test environment and staging" },
      { label: "Evidence required", value: "Test report, OpenAPI validation, request/response samples, request IDs and defect/retest links" },
      { label: "Execution status", value: "Not Run" },
    ],
    rules: [
      "Test success, validation, authentication, exact permission, state guards and standard error envelopes.",
      "Test idempotent duplicates and conflicting key reuse for every mutation that requires idempotency.",
      "Test concurrency/version conflicts for sensitive Admin and finance decisions.",
      "Verify persisted records, jobs, events, notifications and audit effects.",
      "A provisional operation with x-work2cash-gaps cannot pass contract-complete status until those gaps close.",
    ],
    dependencies: records.slice(0, 8).map((record) => `${record.id} — ${record.title}`),
    gaps: ["Execution evidence and implementation status are not recorded by migration."],
    source: "content/technical/contracts.json and generated OpenAPI",
  }));
}

function providerQaRecords() {
  const platform = JSON.parse(read(path.join(ROOT, "content", "technical", "platform.json")));
  return platform.records.filter((record) => record.type === "provider").map((provider, index) => ({
    id: `QA-PROVIDER-${String(index + 1).padStart(2, "0")}`,
    type: "provider-suite",
    title: `${provider.title} validation`,
    domain: "Provider assurance",
    status: "not-run",
    summary: `Verify the ${provider.title} integration, cost guard, failure behavior and operational ownership before it can be production-enabled.`,
    facts: [
      { label: "Provider", value: provider.title },
      { label: "Service domain", value: provider.domain },
      { label: "Selection status", value: provider.status },
      { label: "Owner", value: provider.facts.find((fact) => fact.label === "Owner")?.value || "Backend/Infrastructure owner" },
      { label: "Environment", value: "Sandbox first; production only after recorded approval" },
      { label: "Evidence required", value: "Official capability/pricing source, sandbox run, signature test, duplicate test, failure/fallback test, monitoring screenshot and approval" },
      { label: "Execution status", value: "Not Run" },
    ],
    rules: [
      "Test success, delayed completion, provider failure, timeout, malformed response and duplicate callback.",
      provider.recovery?.failure || "Verify a safe degraded or retryable state.",
      `Fallback: ${provider.recovery?.fallback || "Use only an explicitly validated fallback."}`,
      `Disablement: ${provider.recovery?.disablement || "Disable when security, reliability or cost guard fails."}`,
      "Never use production credentials or personal data in sandbox validation.",
    ],
    dependencies: [provider.id, ...provider.dependencies],
    gaps: ["Official provider evidence and an executed sandbox run are still required."],
    source: "content/technical/platform.json",
  }));
}

function manualQaRecords() {
  const suites = [
    ["QA-SEC-01", "Authentication, session and RBAC", "Security and privacy assurance", "Verify OTP limits, refresh/logout, PIN recovery, Admin TOTP, exact permissions, denial states and audit records."],
    ["QA-SEC-02", "Sensitive-data exposure", "Security and privacy assurance", "Verify KYC, exact address, full media, phone, payment, provider and secret data are minimized and permission-gated in UI, APIs, logs, analytics and errors."],
    ["QA-SEC-03", "Webhook and idempotency security", "Security and privacy assurance", "Verify raw-body signatures, replay protection, duplicate events, conflicting idempotency keys and transactional side effects."],
    ["QA-SEC-04", "Media authorization and retention", "Security and privacy assurance", "Verify signed access, actor/state permissions, upload limits, moderation, deletion/retention and non-public storage."],
    ["QA-REC-01", "Socket reconnect and offline recovery", "Recovery assurance", "Verify reconnect, room reauthorization, REST reconciliation, missing-message recovery and safe offline states."],
    ["QA-REC-02", "PostgreSQL backup and restore", "Infrastructure and recovery assurance", "Produce an encrypted off-server backup, restore into isolation and verify schema plus critical finance/audit records."],
    ["QA-REC-03", "Queue retry and dead-letter recovery", "Infrastructure and recovery assurance", "Verify idempotent retry, terminal failure evidence, alerting and controlled replay for critical workers."],
    ["QA-PERF-01", "Capacity, latency and cost guards", "Performance and cost assurance", "Verify API/socket targets, database/Valkey thresholds, queue age, paid provider budgets and no paid polling loops."],
    ["QA-UAT-01", "Task Owner, Tasker and Admin UAT", "User acceptance", "Run complete role-based journeys with named representatives, record product gaps separately from defects and capture acceptance decisions."],
  ];
  return suites.map(([id, title, domain, summary]) => ({
    id,
    type: "assurance-suite",
    title,
    domain,
    status: "not-run",
    summary,
    facts: [
      { label: "Risk and priority", value: "P0/P1 release gate" },
      { label: "Owner", value: domain.includes("Security") ? "Security and QA" : domain.includes("Infrastructure") ? "Infrastructure and QA" : "QA with affected owners" },
      { label: "Environment", value: "Staging or isolated recovery environment" },
      { label: "Evidence required", value: "Named build/environment, run log, timestamps, sanitized screenshots/logs, defects and retest result" },
      { label: "Execution status", value: "Not Run" },
    ],
    rules: [summary, "A failed P0/P1 result blocks release until fixed and retested or formally rejected from scope.", "Do not use production personal data or secrets as test fixtures."],
    dependencies: ["Relevant Phase 4 technical records", "Approved flows", "Named operational owner"],
    gaps: ["No execution evidence recorded."],
    source: "Phase 5 assurance migration based on approved flows and Phase 4 technical records",
  }));
}

function releaseGateRecords() {
  const qaTables = extractTables(read(LEGACY.qa));
  const gateTable = qaTables.find((table) => table.heading === "Release Readiness Gates");
  return (gateTable?.rows || []).map((row, index) => ({
    id: `RELEASE-${String(index).padStart(2, "0")}`,
    type: "release-gate",
    title: `${row.gate} — ${row.name}`,
    domain: "Release decision",
    status: "not-run",
    summary: row["pass requirement"],
    facts: [
      { label: "Gate", value: row.gate },
      { label: "Primary owner", value: row["primary owner"] },
      { label: "Allowed result", value: "Passed, Failed or Conditionally Accepted with named risk and approver" },
      { label: "Evidence required", value: "Evidence links, acceptance date, build/environment, blocker list, accepted risks and owner" },
      { label: "Current result", value: "Not Run / no release evidence attached" },
    ],
    rules: [
      row["pass requirement"],
      "No P0 or P1 defect remains open at Go/No-Go.",
      "A conditional acceptance names the risk, impact, workaround, owner, approver and follow-up date.",
      "The Go/No-Go record must identify rollback readiness and launch ownership.",
    ],
    dependencies: ["Completed QA suites", "Release candidate build", "Release evidence register"],
    gaps: ["No evidence or acceptance decision is recorded by this migration."],
    source: "Legacy QA and Go-Live Readiness Checklist v1, migrated into the consolidated release register",
  }));
}

function qaSource() {
  const records = [
    ...flowQaRecords(),
    ...contractQaRecords(),
    ...providerQaRecords(),
    ...manualQaRecords(),
    ...releaseGateRecords(),
  ];
  return {
    id: "ASSURANCE-QA-001",
    slug: "qa-release",
    title: "QA and Release Assurance",
    description: "One traceable register for flow acceptance, contracts, providers, security, recovery, UAT, release gates and Go/No-Go evidence.",
    audience: "QA, Mobile, Admin, Backend, Infrastructure, Operations, Product and AI agents",
    owner: "QA Lead",
    reviewers: ["Technical Lead", "Product Lead", "Mobile Lead", "Admin Lead", "Backend Lead", "Infrastructure Lead", "Operations"],
    status: "in-review",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Approved flows, accepted contracts, Phase 4 technical records and evidence-based release policy",
    sourceNotes: [
      "Documentation migration does not mark any test or release gate as passed.",
      "Each record becomes authoritative for release only when it identifies the tested build/environment and links concrete evidence.",
    ],
    sharedRules: [
      "Every main flow requires happy-path, decision-branch and breakpoint/recovery coverage.",
      "Financial mutations require idempotency, reconciliation and ledger/escrow evidence.",
      "Sensitive-data surfaces require authorization, minimization and exposure tests.",
      "Provider suites cover success, delay, failure, duplicate events, fallback and disablement.",
      "No P0 or P1 defect remains open at Go/No-Go.",
    ],
    records: records.sort((left, right) => `${left.domain}:${left.id}`.localeCompare(`${right.domain}:${right.id}`)),
  };
}

function extractLegalClauses(raw) {
  const lines = raw.split("\n");
  const clauses = [];
  let policy = "";
  for (let index = 0; index < lines.length; index += 1) {
    const policyMatch = lines[index].match(/^##\s+(.+)$/);
    if (policyMatch) policy = clean(policyMatch[1]);
    const clauseMatch = lines[index].match(/^###\s+(.+)$/);
    if (!clauseMatch || !policy || policy === "Launch Review Checklist") continue;
    const title = clean(clauseMatch[1]);
    const contents = [];
    for (let cursor = index + 1; cursor < lines.length && !/^#{2,3}\s+/.test(lines[cursor]); cursor += 1) {
      const match = lines[cursor].match(/^[-*]\s+(.+)$/);
      if (match) contents.push(clean(match[1]));
    }
    if (contents.length) clauses.push({ policy, title, contents });
  }
  return clauses;
}

function legalMapping(policy, title) {
  const value = `${policy} ${title}`;
  if (/KYC|identity/i.test(value)) return ["Tasker activation and KYC flows", "KYC screens", "KycVerification and KycAttempt", "Smile ID controls"];
  if (/Payment|Wallet|Escrow|Commission|Earnings|Refund|Withdrawal|Referral/i.test(value)) return ["Task creation/payment and settlement flows", "Finance screens", "Wallet, ledger, escrow and payout models", "Paystack/Moniepoint controls"];
  if (/Location/i.test(value)) return ["Task location and execution flows", "Location/tracking screens", "TaskLocation and tracking state", "Maps and privacy controls"];
  if (/Privacy|Data|Retention|Rights|Security/i.test(value)) return ["All personal-data flows", "Sensitive screens", "Access, retention and audit controls", "Security and privacy assurance"];
  if (/Warning|Strike|Safety|Conduct|Dispute|Support|Cancellation|Blocking|Risk/i.test(value)) return ["Cancellation, report, risk and support flows", "Admin risk/support screens", "Report, warning, strike and audit models", "Operations policy"];
  return ["Marketplace and account flows", "Relevant user/Admin screens", "Related contract and data records", "Product policy"];
}

function correctLegalRule(rule) {
  if (/REST APIs remain the source of truth/i.test(rule)) {
    return "Authoritative platform records control task, payment, wallet and dispute outcomes; real-time delivery does not override them.";
  }
  if (/active mode selected/i.test(rule)) return rule.replace(/The active mode selected/, "The mode selected");
  return rule;
}

function legalSource() {
  const clauses = extractLegalClauses(read(LEGACY.legal));
  const counters = new Map();
  const records = clauses.map((clause) => {
    const count = (counters.get(clause.policy) || 0) + 1;
    counters.set(clause.policy, count);
    const prefix = slug(clause.policy).split("-").map((part) => part[0]).join("").toUpperCase().slice(0, 6);
    const mapping = legalMapping(clause.policy, clause.title);
    const rules = clause.contents.map(correctLegalRule);
    const retentionGap = /Retention|Data We Collect|Sensitive Data|User Rights/i.test(clause.title)
      ? ["Qualified legal/privacy review must set lawful basis, retention periods, deletion exceptions and user-request procedure."]
      : [];
    return {
      id: `CLAUSE-${prefix}-${String(count).padStart(2, "0")}`,
      type: "legal-clause",
      title: `${clause.policy} — ${clause.title}`,
      domain: clause.policy,
      status: "legal-review-required",
      summary: rules[0],
      facts: [
        { label: "Internal policy family", value: clause.policy },
        { label: "Publication status", value: "Internal draft; not approved for public enforcement" },
        { label: "Effective date", value: "Not set" },
        { label: "Version", value: "1.0 migration draft" },
        { label: "Business owner", value: "Product Lead" },
        { label: "Required reviewer", value: "Qualified Legal reviewer and Privacy reviewer where applicable" },
        { label: "Compliance mapping", value: mapping.join(" → ") },
        { label: "Evidence required", value: "Legal approval, implementation/control evidence and publication decision" },
      ],
      rules,
      dependencies: mapping,
      gaps: [
        "Qualified legal review and named approval are required before publication or enforcement.",
        "Company/controller identity, contact and change-notice details require approval.",
        ...retentionGap,
      ],
      source: "Legacy Legal and User-Facing Documents Pack v1, migrated as an internal non-effective draft",
    };
  });

  return {
    id: "ASSURANCE-LEGAL-001",
    slug: "legal-compliance",
    title: "Legal and Compliance",
    description: "One internal clause library and compliance map for Terms, Privacy, Tasker, cancellation/refund, safety, KYC, location and payment/wallet policy. It is not legal approval or public publication.",
    audience: "Legal, Privacy, Product, Operations, Technical leads and AI agents",
    owner: "Product Lead",
    reviewers: ["Qualified Legal reviewer", "Privacy reviewer", "Technical Lead", "Operations"],
    status: "legal-review-required",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Applicable law and formally approved product policy; migration content remains non-effective until qualified review",
    sourceNotes: [
      "This consolidated page is an internal compliance work surface, not public Terms or Privacy publication.",
      "Public policy exports may be generated only after qualified review, approved controller/contact details, effective date and publication decision.",
    ],
    sharedRules: [
      "Do not present draft wording as legal advice, approval, an effective policy or a completed compliance obligation.",
      "Public wording stays plain-language and omits internal REST, socket, database and infrastructure implementation detail.",
      "Every clause maps to affected flows, screens, backend/data controls, business owner, reviewer and evidence.",
      "Product behavior and public wording must be corrected together when an approved decision changes.",
      "Retention, deletion and disclosure rules require qualified legal and privacy review.",
    ],
    records,
  };
}

function decisionRecordsFromLegacy() {
  const tables = extractTables(read(LEGACY.decisions));
  const records = [];
  let counter = 0;
  for (const table of tables) {
    if (!/Resolved|Conflicts|Corrections/i.test(table.heading)) continue;
    for (const row of table.rows) {
      counter += 1;
      const question = row["flow / issue"] || row.finding || row.area || row["compared flow area"] || table.heading;
      const decision = row["decision result"] || row["current product decision"] || row["required correction"] || row.action || row.status;
      const evidence = row.evidence || row["figma shows"] || row.status || "Legacy alignment review";
      const next = row["status / next action"] || row.action || row["required correction"] || "";
      const openPropagation = /Open Design|Replace|Update|Align|must be updated|before implementation/i.test(`${row.status || ""} ${next}`);
      records.push({
        id: `DECISION-LEGACY-${String(counter).padStart(2, "0")}`,
        type: "decision",
        title: question,
        domain: /Admin/i.test(table.heading) ? "Admin product decisions" : /Mobile/i.test(table.heading) ? "Mobile product decisions" : "Cross-platform alignment",
        status: openPropagation ? "accepted-propagation-open" : "accepted",
        summary: decision,
        facts: [
          { label: "Question or conflict", value: question },
          { label: "Decision", value: decision },
          { label: "Reason/evidence", value: evidence },
          { label: "Trade-off", value: "Preserves the accepted MVP behavior while requiring affected design, source, implementation and QA records to remain aligned." },
          { label: "Decision owner", value: "Product Lead" },
          { label: "Approver", value: "Repository-owner accepted decision; individual names not recorded" },
          { label: "Decision date", value: "17 July 2026 migration evidence" },
          { label: "Propagation status", value: openPropagation ? "Open: affected design or evidence still requires correction" : "Recorded as resolved in the legacy alignment review" },
          { label: "Closure evidence", value: next || "Approved standalone flow library and corrected technical sources" },
        ],
        rules: ["Only accepted decisions control implementation.", "Resolved requires every affected canonical source/output to be updated or explicitly excepted."],
        dependencies: ["Approved standalone flows", "Phase 4 technical reference", "Affected Product/Design owner"],
        gaps: openPropagation ? ["Propagation remains open until the affected design/source and validation evidence are linked."] : [],
        source: "Legacy Flow Alignment Review v1",
      });
    }
  }
  return records;
}

function currentDecisionRecords() {
  const decisions = [
    ["DECISION-PRODUCT-01", "Authentication providers", "Google and Apple are allowed for MVP where implemented; Facebook login is excluded.", "Identity flows and screens"],
    ["DECISION-PRODUCT-02", "Tasker KYC path", "Tasker KYC uses Smile ID NIN/BVN and biometric verification. Generic document upload is not the primary MVP path.", "KYC flows, screens, contracts and data"],
    ["DECISION-PRODUCT-03", "MVP task categories", "Use Home, Errands, Office and Support.", "Catalog, task creation, screens and seed data"],
    ["DECISION-PRODUCT-04", "Payment experience", "Use cardless-first Paystack and Moniepoint flows; card-entry-first UX is excluded.", "Payment flows, screens, providers and contracts"],
    ["DECISION-PRODUCT-05", "Tasker acceptance", "Taskers do not auto-accept tasks.", "Availability, matching and task execution"],
    ["DECISION-PRODUCT-06", "Admin task intervention", "Admin may force-cancel under policy but cannot reassign or select a replacement Tasker.", "Admin task operations, audit and QA"],
    ["DECISION-TECH-01", "User mode field", "Use mode. The activeMode field is forbidden.", "Mobile state, API and data model"],
    ["DECISION-TECH-02", "Direct offers", "Direct offers use REST and notifications, not sockets.", "Matching contracts and mobile flows"],
    ["DECISION-TECH-03", "Dispute interaction", "Disputes use structured reports and review, not live chat.", "Reports, support and Admin review"],
    ["DECISION-TECH-04", "Payment truth", "Frontend redirects never prove final payment; verified backend/provider evidence controls state.", "Payment, ledger, escrow and reconciliation"],
    ["DECISION-DOC-01", "Execution-plan granularity", "Junior-developer execution plans remain team-week packs with Day 1 through Day 5 inside each pack.", "Phase 3 planning"],
    ["DECISION-DOC-02", "Technical-reference granularity", "Phase 4 remains five human pages and four focused agent packs; individual records are anchors, not standalone documents.", "Phase 4 technical library"],
    ["DECISION-DOC-03", "Assurance-reference granularity", "Phase 5 remains four human pages and three focused agent packs; tests, clauses and decisions are anchored records.", "Phase 5 assurance library"],
  ];
  return decisions.map(([id, title, decision, affected]) => ({
    id,
    type: "decision",
    title,
    domain: id.includes("PRODUCT") ? "Product decisions" : id.includes("TECH") ? "Technical decisions" : "Documentation decisions",
    status: "accepted",
    summary: decision,
    facts: [
      { label: "Question or conflict", value: title },
      { label: "Decision", value: decision },
      { label: "Reason", value: "Preserve approved MVP scope, security, consistency and focused reading." },
      { label: "Trade-off", value: "Deferred or excluded alternatives require a new governed decision before use." },
      { label: "Decision owner", value: id.includes("DOC") ? "Technical Lead" : "Product Lead" },
      { label: "Approver", value: "Repository owner / accepted project direction" },
      { label: "Decision date", value: "Recorded by 18 July 2026" },
      { label: "Affected scope", value: affected },
      { label: "Implementation status", value: "Documented; implementation evidence remains task/release specific" },
      { label: "Closure evidence", value: "Approved flows, Phase 3 plans and Phase 4 technical records as applicable" },
    ],
    rules: ["Do not silently reopen or contradict an accepted decision.", "A change updates the decision first, then every affected source, output, plan and QA record."],
    dependencies: [affected, "Document registry", "Review log"],
    gaps: [],
    source: "AGENTS.md, approved flows and repository-owner direction",
  }));
}

function riskAndQuestionRecords() {
  const risks = [
    ["RISK-01", "Incomplete contract schemas", "High", "Provisional request/response DTO gaps can block consumer/backend integration.", "Backend Lead", "Close Phase 4 contract gaps and rerun contract suites."],
    ["RISK-02", "Provider capability or pricing drift", "High", "Unverified provider terms can cause failed launch behavior or uncontrolled cost.", "Infrastructure and Finance", "Use official dated evidence, sandbox proof, cost guards and disablement."],
    ["RISK-03", "Legal wording not approved", "Critical", "Draft policy may not meet legal, privacy or consumer-protection obligations.", "Product Lead", "Qualified Legal and Privacy review before publication or enforcement."],
    ["RISK-04", "Backup without restore evidence", "Critical", "A successful backup job may still be unusable during recovery.", "Infrastructure Lead", "Isolated restore drill with verified finance/audit records."],
    ["RISK-05", "Sensitive-data exposure", "Critical", "KYC, location, phone, media or payment information may leak through UI, logs or tooling.", "Security Lead", "Permission, minimization, scrubbing and exposure tests."],
    ["RISK-06", "Design/source divergence", "High", "Figma or UI copy may reintroduce excluded payment, KYC, category, auth or reassignment behavior.", "Product and Design", "Link exact design version and complete propagation review."],
  ].map(([id, title, severity, summary, owner, mitigation]) => ({
    id,
    type: "risk",
    title,
    domain: "Risk register",
    status: "open",
    summary,
    facts: [
      { label: "Severity", value: severity },
      { label: "Owner", value: owner },
      { label: "Mitigation", value: mitigation },
      { label: "Release effect", value: severity === "Critical" ? "Blocks Go/No-Go until controlled and evidenced" : "Requires named acceptance or closure evidence" },
    ],
    rules: ["Record current evidence, residual risk, owner and next review.", "Do not mark closed because documentation exists; link verification evidence."],
    dependencies: ["QA and Release Assurance", "Affected decision and technical records"],
    gaps: ["Current mitigation evidence and residual-risk acceptance are not attached."],
    source: "Phase 5 consolidated risk register",
  }));

  const questions = [
    ["QUESTION-01", "Legal retention schedule", "What exact retention, deletion, anonymization and exception periods apply to each data class?", "Qualified Legal and Privacy reviewer"],
    ["QUESTION-02", "Infrastructure recovery objectives", "What RPO/RTO, region, network and failover design receives formal approval?", "Infrastructure Lead and Security"],
    ["QUESTION-03", "Provider production approval", "Which providers have current official pricing, sandbox proof, contracts/support terms and production approval?", "Infrastructure, Backend and Finance"],
    ["QUESTION-04", "Design source of record", "Which Figma file/version is the reviewed implementation source for every MVP surface?", "Product and Design"],
    ["QUESTION-05", "Provisional DTO/schema closure", "Which Phase 4 contract and model gaps must close before the first integration stage begins?", "Backend Lead and consumer teams"],
    ["QUESTION-06", "Active delivery context", "Which delivery stage, team week and day is active for implementation?", "Project Lead"],
  ].map(([id, title, question, owner]) => ({
    id,
    type: "open-question",
    title,
    domain: "Open questions",
    status: "open",
    summary: question,
    facts: [
      { label: "Question", value: question },
      { label: "Decision owner", value: owner },
      { label: "Approver", value: "Required subject-matter authority" },
      { label: "Decision date", value: "Not decided" },
      { label: "Implementation effect", value: "Blocks only the affected decision or execution scope" },
    ],
    rules: ["Do not infer an answer from calendar dates, legacy labels or adjacent provisional records.", "When decided, create or update the controlling decision and propagate it before closing this question."],
    dependencies: ["Document registry", "Affected technical/legal/plan records"],
    gaps: ["Decision and closure evidence not recorded."],
    source: "Phase 5 open-question register",
  }));
  return [...risks, ...questions];
}

function decisionsSource() {
  const records = [...currentDecisionRecords(), ...decisionRecordsFromLegacy(), ...riskAndQuestionRecords()];
  return {
    id: "ASSURANCE-DECISIONS-001",
    slug: "decisions-governance",
    title: "Decisions and Governance",
    description: "One governed register for accepted decisions, design conflicts, risks, open questions and cross-document propagation.",
    audience: "Product, Technical leads, Design, QA, Operations and AI agents",
    owner: "Technical Lead",
    reviewers: ["Product Lead", "Mobile Lead", "Admin Lead", "Backend Lead", "Design", "QA"],
    status: "in-review",
    version: "1.0",
    lastReviewed: REVIEW_DATE,
    authority: "Approved decisions and documented repository-owner direction; open records have no implementation authority",
    sourceNotes: [
      "Only accepted decisions control implementation. Open questions, risks and pending propagation remain visible but non-authoritative.",
      "A decision is not resolved until every affected canonical source, generated output, design, plan and QA record is updated or explicitly excepted.",
    ],
    sharedRules: [
      "Record the decision before changing dependent behavior.",
      "Name the owner, approver, reason, trade-off, affected scope and closure evidence.",
      "Rejected, deferred and superseded alternatives cannot re-enter implementation without a new decision.",
      "Publication or implementation does not prove decision approval.",
      "Close propagation only with linked evidence.",
    ],
    records: records.sort((left, right) => `${left.domain}:${left.id}`.localeCompare(`${right.domain}:${right.id}`)),
  };
}

function run() {
  for (const file of Object.values(LEGACY)) {
    if (!fs.existsSync(file)) throw new Error(`Missing migration source: ${path.relative(ROOT, file)}`);
  }
  for (const file of [
    path.join(ROOT, "content", "technical", "contracts.json"),
    path.join(ROOT, "content", "technical", "platform.json"),
  ]) {
    if (!fs.existsSync(file)) throw new Error(`Phase 4 source required before Phase 5: ${path.relative(ROOT, file)}`);
  }

  const families = [qaSource(), legalSource(), decisionsSource()];
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
  const metadata = {
    id: "ASSURANCE-LIB-001",
    title: "Phase 5 Consolidated Assurance and Governance Library",
    version: "1.0",
    status: "in-review",
    lastReviewed: REVIEW_DATE,
    authority: "Approved product/technical sources, qualified subject-matter authority and evidence-based release governance",
    families: families.map(({ id, slug: familySlug, title, description }) => ({ id, slug: familySlug, title, description })),
    legacySources: Object.fromEntries(Object.entries(LEGACY).map(([key, file]) => [key, path.relative(ROOT, file).split(path.sep).join("/")])),
    editRule: "Edit the three JSON family sources after bootstrap; do not rerun this migration script for normal changes.",
  };
  fs.writeFileSync(path.join(OUTPUT_ROOT, "library.json"), JSON.stringify(metadata, null, 2) + "\n");
  for (const family of families) fs.writeFileSync(path.join(OUTPUT_ROOT, `${family.slug}.json`), JSON.stringify(family, null, 2) + "\n");
  console.log(`Bootstrapped ${families.length} Phase 5 assurance source families with ${families.reduce((total, family) => total + family.records.length, 0)} anchored records.`);
}

try {
  run();
} catch (error) {
  console.error(`Phase 5 source bootstrap failed: ${error.message}`);
  process.exitCode = 1;
}
