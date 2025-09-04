document.getElementById("save").addEventListener("click", () => {
  const pwd = document.getElementById("password").value;
  if (pwd) {
    chrome.storage.local.set({ password: pwd }, () => {
      alert("Contraseña guardada ✅");
    });
  }
});

document.getElementById("generate").addEventListener("click", () => {
  const pwd = Math.random().toString(36).slice(-10); // simple generator
  document.getElementById("password").value = pwd;
});
