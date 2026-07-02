(function () {
  const SESSION_KEY = "w2c_docs_unlocked";
  const SITE_BASE = "/docs";
  const LOGIN_PATH = `${SITE_BASE}/`;

  const isUnlocked = sessionStorage.getItem(SESSION_KEY) === "true";

  if (!isUnlocked) {
    const currentPath =
      window.location.pathname + window.location.search + window.location.hash;
    const next = encodeURIComponent(currentPath);

    window.location.replace(`${LOGIN_PATH}?next=${next}`);
  }
})();
