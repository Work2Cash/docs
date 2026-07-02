const PASSWORD_HASH = "d18aee7cb358683c82fbf0996bab3a1149c5884ab28abc011cd0214c996679b6";
const SESSION_KEY = "w2c_docs_unlocked";
const DEFAULT_DESTINATION = "/docs/documents/main-enterprise-architecture-v1.html";

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function isUnlocked() {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

function getSafeDestination() {
  const params = new URLSearchParams(window.location.search);
  const next = params.get("next");

  if (!next) {
    return DEFAULT_DESTINATION;
  }

  try {
    const url = new URL(next, window.location.origin);

    if (url.origin === window.location.origin && url.pathname.startsWith("/docs/")) {
      return url.pathname + url.search + url.hash;
    }
  } catch (error) {
    return DEFAULT_DESTINATION;
  }

  return DEFAULT_DESTINATION;
}

async function unlock() {
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const hash = await sha256(passwordInput.value);

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, "true");
    window.location.href = getSafeDestination();
  } else {
    error.textContent = "Incorrect password.";
  }
}

document.getElementById("unlock").addEventListener("click", unlock);

document.getElementById("password").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlock();
});

if (isUnlocked()) {
  window.location.href = getSafeDestination();
}
