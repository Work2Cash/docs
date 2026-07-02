const PASSWORD_HASH = "d18aee7cb358683c82fbf0996bab3a1149c5884ab28abc011cd0214c996679b6";
const DESTINATION = "./documents/main-enterprise-architecture-v1.html";

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function isUnlocked() {
  return sessionStorage.getItem("w2c_docs_unlocked") === "true";
}

async function unlock() {
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const hash = await sha256(passwordInput.value);

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem("w2c_docs_unlocked", "true");
    window.location.href = DESTINATION;
  } else {
    error.textContent = "Incorrect password.";
  }
}

document.getElementById("unlock").addEventListener("click", unlock);

document.getElementById("password").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlock();
});

if (isUnlocked()) {
  window.location.href = DESTINATION;
}