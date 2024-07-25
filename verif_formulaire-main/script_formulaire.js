// méthode qui précharge le Dom
document.addEventListener('DOMContentLoaded', function() {

let inputs = document.querySelectorAll('input, textarea');
let contactBtn = document.getElementById('#contactBtn');
console.log(contactBtn)
// Vérifier tous les champs lors du clic sur le bouton Envoyer
contactBtn.addEventListener('click', function() {
    let champValid = true;

    inputs.forEach(input => {
        validateField(input);
        if (input.classList.contains('error')) {
            champValidValid = false;
        }
    });

    if (champValid) {
        alert('Formulaire soumis avec succès!');
        // Ici, vous pouvez soumettre le formulaire, par exemple en utilisant AJAX.
    } else {
        alert('Veuillez corriger les erreurs dans le formulaire.');
    }
});

})