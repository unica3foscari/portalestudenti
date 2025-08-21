// Aggiunge un "ascoltatore" all'evento di invio del modulo di login
document.getElementById('login-form').addEventListener('submit', function(event) {
    // Impedisce al modulo di ricaricare la pagina, che è il comportamento predefinito
    event.preventDefault();

    // Recupera i valori inseriti dall'utente
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Recupera l'elemento dove mostrare i messaggi di errore
    const errorMessage = document.getElementById('error-message');

    // Controlla se le credenziali sono quelle corrette
    if (username === 'lorenzosegale' && password === 'perhelicon') {
        // Se corrette, reindirizza l'utente alla pagina dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        // Se sbagliate, mostra un messaggio di errore
        errorMessage.textContent = 'Credenziali non valide. Riprova.';
    }
});
