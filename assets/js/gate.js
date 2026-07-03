const PASSWORD_HASH = "98838c66b1c0fbfdb1969d63537f23b9d64d8010ae57db48dc4c70da3109bc2a";
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

function showDocumentLibrary() {
  const gate = document.getElementById("gate");
  const docs = document.getElementById("docs");

  if (!gate || !docs) {
    return false;
  }

  gate.classList.add("hidden");
  docs.classList.remove("hidden");
  return true;
}

function continueAfterUnlock() {
  const params = new URLSearchParams(window.location.search);

  if (params.has("next")) {
    window.location.href = getSafeDestination();
    return;
  }

  if (!showDocumentLibrary()) {
    window.location.href = DEFAULT_DESTINATION;
  }
}

async function unlock() {
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const hash = await sha256(passwordInput.value);

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, "true");
    continueAfterUnlock();
  } else {
    error.textContent = "Incorrect password.";
  }
}

const unlockButton = document.getElementById("unlock");
const authForm = document.getElementById("auth-form");

if (unlockButton) {
  unlockButton.addEventListener("click", unlock);
}

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    unlock();
  });
}

document.getElementById("password").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlock();
});

if (isUnlocked()) {
  continueAfterUnlock();
}
