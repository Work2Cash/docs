(() => {
  "use strict";

  const search = document.querySelector("[data-portal-search]");
  const scope = document.querySelector("[data-portal-scope]");
  const results = document.querySelector("[data-portal-results]");
  const count = document.querySelector("[data-portal-result-count]");
  const status = document.querySelector("[data-portal-search-status]");
  let entries = [];

  function normalize(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function resultCard(entry) {
    const article = document.createElement("article");
    article.className = "search-result";

    const meta = document.createElement("div");
    meta.className = "search-result-meta";
    for (const value of [entry.collection, entry.status].filter(Boolean)) {
      const badge = document.createElement("span");
      badge.textContent = value;
      meta.append(badge);
    }

    const heading = document.createElement("h3");
    const link = document.createElement("a");
    link.href = entry.href;
    link.textContent = `${entry.id} — ${entry.title}`;
    heading.append(link);

    const description = document.createElement("p");
    description.textContent = entry.description;

    article.append(meta, heading, description);
    if (entry.agentHref) {
      const agentLink = document.createElement("a");
      agentLink.className = "search-agent-link";
      agentLink.href = entry.agentHref;
      agentLink.textContent = "Open agent context";
      article.append(agentLink);
    }
    return article;
  }

  function showMessage(message) {
    results.replaceChildren();
    const paragraph = document.createElement("p");
    paragraph.className = "search-message";
    paragraph.textContent = message;
    results.append(paragraph);
  }

  function applySearch() {
    const query = normalize(search?.value);
    const selectedScope = scope?.value || "all";
    if (query.length < 2) {
      count.textContent = `${entries.length} searchable records available`;
      showMessage("Enter at least two characters. Try a flow ID, task ID, endpoint, model, provider, screen, test, clause or decision.");
      return;
    }

    const terms = query.split(" ").filter(Boolean);
    const broadMatches = entries.filter((entry) => {
      if (selectedScope !== "all" && entry.type !== selectedScope) return false;
      const haystack = normalize([
        entry.id,
        entry.title,
        entry.description,
        entry.collection,
        entry.audience,
        entry.status,
        ...(entry.keywords || []),
      ].join(" "));
      return terms.every((term) => haystack.includes(term));
    });
    const exactIdMatches = broadMatches.filter((entry) => normalize(entry.id) === query);
    const matches = exactIdMatches.length ? exactIdMatches : broadMatches;

    count.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"} found`;
    results.replaceChildren(...matches.slice(0, 40).map(resultCard));
    if (!matches.length) showMessage("No matching current record. Try a broader term or another collection.");
    if (matches.length > 40) {
      const message = document.createElement("p");
      message.className = "search-message";
      message.textContent = `Showing the first 40 of ${matches.length} results. Add another word to narrow the search.`;
      results.append(message);
    }
  }

  async function loadIndex() {
    try {
      const response = await fetch("./documents/search-index.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`Search index returned ${response.status}`);
      const payload = await response.json();
      entries = Array.isArray(payload.entries) ? payload.entries : [];
      status.textContent = `Search is ready across ${entries.length} current records.`;
      applySearch();
    } catch (error) {
      status.textContent = "Search is temporarily unavailable. Use the reader paths and library cards below.";
      showMessage("The search index could not be loaded.");
    }
  }

  search?.addEventListener("input", applySearch);
  scope?.addEventListener("change", applySearch);
  loadIndex();
})();
