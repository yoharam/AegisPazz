// Filtrado por búsqueda
const searchInput = document.getElementById('searchInput');
const vaultBody = document.getElementById('vaultBody');

searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  Array.from(vaultBody.rows).forEach(row => {
    const site = row.cells[0].textContent.toLowerCase();
    const user = row.cells[1].textContent.toLowerCase();
    row.style.display = site.includes(filter) || user.includes(filter) ? '' : 'none';
  });
});

// Mostrar / ocultar contraseña
vaultBody.addEventListener('click', e => {
  if(e.target.classList.contains('show-btn')) {
    const pwSpan = e.target.closest('tr').querySelector('.password');
    if(pwSpan.textContent.includes('•')) {
      pwSpan.textContent = 'miContraseña123'; // aquí debería venir tu contraseña real
      e.target.textContent = '🙈';
    } else {
      pwSpan.textContent = '••••••••';
      e.target.textContent = '👁️';
    }
  }

  // Copiar contraseña
  if(e.target.classList.contains('copy-btn')) {
    const pwSpan = e.target.closest('tr').querySelector('.password');
    navigator.clipboard.writeText(pwSpan.textContent.includes('•') ? 'miContraseña123' : pwSpan.textContent)
      .then(() => alert('Contraseña copiada al portapapeles'));
  }

  // Editar (placeholder)
  if(e.target.classList.contains('edit-btn')) {
    alert('Función de editar aún no implementada');
  }

  // Eliminar fila
  if(e.target.classList.contains('delete-btn')) {
    if(confirm('¿Eliminar esta contraseña?')) {
      e.target.closest('tr').remove();
    }
  }
});
