(() => {
  "use strict";

  const search = document.querySelector("[data-technical-search]");
  const domain = document.querySelector("[data-technical-domain]");
  const records = [...document.querySelectorAll("[data-technical-record]")];
  const resultCount = document.querySelector("[data-technical-result-count]");
  const emptyState = document.querySelector("[data-technical-empty]");

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function applyFilters() {
    const query = normalize(search?.value);
    const selectedDomain = normalize(domain?.value);
    let visible = 0;

    for (const record of records) {
      const matchesQuery = !query || normalize(record.textContent).includes(query);
      const matchesDomain = !selectedDomain || normalize(record.dataset.domain) === selectedDomain;
      const show = matchesQuery && matchesDomain;
      record.hidden = !show;
      if (show) visible += 1;
    }

    if (resultCount) {
      resultCount.textContent = `${visible} of ${records.length} records shown`;
    }
    if (emptyState) emptyState.hidden = visible !== 0;
  }

  function openHashRecord() {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target?.matches("details")) {
      if (search) search.value = "";
      if (domain) domain.value = "";
      applyFilters();
      target.open = true;
    }
  }

  search?.addEventListener("input", applyFilters);
  domain?.addEventListener("change", applyFilters);
  window.addEventListener("hashchange", openHashRecord);
  openHashRecord();
  applyFilters();
})();
