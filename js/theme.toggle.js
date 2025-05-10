// theme-toggle.js

function toggleTheme() {
document.body.classList.toggle('dark-mode');

// Salvar a preferência no localStorage
const isDark = document.body.classList.contains('dark-mode');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Carregar preferência do usuário ao iniciar
window\.addEventListener('DOMContentLoaded', () => {
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
document.body.classList.add('dark-mode');
}
});
