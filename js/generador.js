const lengthInput = document.getElementById('lengthInput');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const passwordOutput = document.getElementById('passwordOutput');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');

// Función para generar contraseña
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let charset = '';
  if (upperCase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowerCase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers.checked) charset += '0123456789';
  if (symbols.checked) charset += '!@#$%^&*()_+-={}[]|:;<>,.?/~';

  if (!charset) {
    alert('Selecciona al menos un tipo de carácter');
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Generar contraseña
generateBtn.addEventListener('click', () => {
  passwordOutput.value = generatePassword();
});

// Copiar al portapapeles
copyBtn.addEventListener('click', () => {
  if (!passwordOutput.value) return alert('Genera primero una contraseña');
  navigator.clipboard.writeText(passwordOutput.value)
    .then(() => alert('Contraseña copiada al portapapeles'));
});

// Guardar en la bóveda (ejemplo básico)
saveBtn.addEventListener('click', () => {
  if (!passwordOutput.value) return alert('Genera primero una contraseña');
  // Aquí iría la lógica para guardar en tu bóveda real
  alert(`Contraseña "${passwordOutput.value}" guardada en la bóveda`);
  passwordOutput.value = '';
});
