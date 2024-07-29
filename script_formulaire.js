// méthode qui précharge le Dom
document.addEventListener('DOMContentLoaded', function() {

    // cible les élements input
let champ = document.getElementById('champ');
let name = document.getElementById('name');
let prenom = document.getElementById('prenom');
let pseudo = document.getElementById('pseudo');
let mail = document.getElementById('mail');
let checkbox = document.getElementById('checkbox');
let checkMessage = document.getElementById('checkMessage');
let contactBtn = document.getElementById('contactBtn');
let envoiFormulaire = document.getElementById('envoiFormulaire')

    // cible les span erreur
let nameErreur = document.getElementById('nameErreur');
let prenomErreur = document.getElementById('prenomErreur');
let pseudoErreur = document.getElementById('pseudoErreur');
let mailErreur = document.getElementById('mailErreur');
let checkErreur = document.getElementById('checkErreur');


// vérification de la validité du champ nom
function nomValide() {
    let nomValide = name.value.trim();
    if (nomValide == '') {
        name.style.border = "2px solid red";
        nameErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        name.style.border = "2px solid green";;
        nameErreur.textContent = "";
        return true;
    }
}
name.addEventListener('blur', nomValide);


// vérification de la validité du champ prenom
function prenomValide() {
    let prenomValide = prenom.value.trim();
    if (prenomValide == '') {
        prenom.style.border = "2px solid red";
        prenomErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        prenom.style.border = "2px solid green";;
        prenomErreur.textContent = "";
        return true;
    }
}
prenom.addEventListener('blur', prenomValide);


// vérification de la validité du champ pseudo
function pseudoValide() {
    let pseudoValide = pseudo.value.trim();
    if (pseudoValide == '') {
        pseudo.style.border = "2px solid red";
        pseudoErreur.textContent = "Le champ ne doit pas être vide";
        return false;
    }else{
        pseudo.style.border = "2px solid green";;
        pseudoErreur.textContent = "";
        return true;
    }
}
pseudo.addEventListener('blur', pseudoValide);

// vérification de la validité du champ text
function textValide() {
    let textValide = message.value.trim();
    if (textValide == '') {
        message.style.border = "2px solid red";
        textErreur.textContent = "Le champ ne doit pas être vide";
        return false;
    }else{
        message.style.border = "2px solid green";;
        textErreur.textContent = "";
        return true;
    }
}
message.addEventListener('blur', textValide); // 'blur' pour le changement d'input



// vérification de la validité du champ checkbox
function checkValide (){
    let checkValide = document.getElementById(checkErreur)
    if (checkbox.checked == true){
        checkMessage.style.color="green";
        checkErreur.textContent ="";
        return true;
    }else{
        checkMessage.style.color = "red";
        checkErreur.style.color ="red";
        checkErreur.textContent = "Vous devez accepter les termes et conditions";
        return false;
    }
}
checkbox.addEventListener('blur', checkValide);



// vérification de la validité du champ mail
function mailValide() {
    let mailValide = mail.value.trim();
  
    let formMail = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    if (mailValide == '') {
        mail.style.border = "2px solid red";
        mailErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        if(!formMail.test(mailValide)){
            console.log(formMail.test(mailValide))  //si le test renvoie false. Le message d'erreur forma est affiché
            mail.style.border = "2px solid red";
            mailErreur.textContent = "Le format mail n'est pas respecté";
            return false;
        }else{
        mail.style.border = "2px solid green";;
        mailErreur.textContent = ""; 
        return true;
        }
    }
}
mail.addEventListener('blur', mailValide);

// Vérification du bouton envoyer
contactBtn.addEventListener ('click',(e)=>{
    e.preventDefault(); // empèche l'envoi du formulaire
console.log(e)

    if (!nomValide()|| !prenomValide() || !pseudoValide() || !textValide() || !checkValide() || !mailValide()){  // si formulaire false = message d'erreur
        envoiFormulaire.textContent = "Votre formulaire présente des erreurs et ne peut donc pas être envoyé.";
        envoiFormulaire.style.color = "red"; 
    } else{
        champ.submit();
        envoiFormulaire.textContent ="Formulaire Envoyé"
    }
    
   
})

})  // fin de la commande qui vérifie le DOM
