// Gestisce il form di login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            if (username === 'lorenzosegale' && password === 'perhelicon') {
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Credenziali non valide. Riprova.';
            }
        });
    }
});

// Funzione per simulare l'iscrizione a un appello
function iscrivi(button) {
    button.textContent = 'Iscritto';
    button.disabled = true;
    button.classList.remove('btn-primary');
    button.classList.add('btn-secondary');
}

// Lascia il file `piano_studio.html` invariato.
