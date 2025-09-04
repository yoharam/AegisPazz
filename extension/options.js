document.getElementById("clear").addEventListener("click", () => {
  chrome.storage.local.clear(() => {
    alert("Todas las contraseñas fueron eliminadas ❌");
  });
});
