// Detectar campos de password e inyectar un botón de autocompletar
const inputs = document.querySelectorAll("input[type='password']");
inputs.forEach(input => {
  input.style.border = "2px solid red"; // solo prueba visual
});
