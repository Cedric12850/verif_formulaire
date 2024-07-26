// méthode qui précharge le Dom
document.addEventListener('DOMContentLoaded', function() {


    // cible les élements input
let champ = document.getElementById('champ');
let name = document.getElementById('name');
let prenom = document.getElementById('prenom');
let pseudo = document.getElementById('pseudo');
let mail = document.getElementById('mail');
let checkbox = document.getElementById('checkbox');
let contactBtn = document.getElementById('contactBtn');


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
    }else{
        name.style.border = "2px solid green";;
        nameErreur.textContent = "";
    }
}
name.addEventListener('blur', nomValide);


// vérification de la validité du champ prenom
function prenomValide() {
    let prenomValide = prenom.value.trim();
    if (prenomValide == '') {
        prenom.style.border = "2px solid red";
        prenomErreur.textContent = "Le champ ne doit pas être vide"
    }else{
        prenom.style.border = "2px solid green";;
        prenomErreur.textContent = "";
    }
}
prenom.addEventListener('blur', prenomValide);


// vérification de la validité du champ pseudo
function pseudoValide() {
    let pseudoValide = pseudo.value.trim();
    if (pseudoValide == '') {
        pseudo.style.border = "2px solid red";
        pseudoErreur.textContent = "Le champ ne doit pas être vide"
    }else{
        pseudo.style.border = "2px solid green";;
        pseudoErreur.textContent = "";
    }
}
pseudo.addEventListener('blur', pseudoValide);

// vérification de la validité du champ text
function textValide() {
    let textValide = message.value.trim();
    if (textValide == '') {
        message.style.border = "2px solid red";
        textErreur.textContent = "Le champ ne doit pas être vide"
    }else{
        message.style.border = "2px solid green";;
        textErreur.textContent = "";
    }
}
message.addEventListener('blur', textValide);



// vérification de la validité du champ checkbox
function checkValide() {
    let checkValide = checkbox.value.trim();
    if (checkValide == '') {
        checkbox.style.border = "2px solid red";
        checkErreur.textContent = "Le champ ne doit pas être vide"
    }else{
        checkbox.style.border = "2px solid green";;
        checkErreur.textContent = "";
    }
}
checkbox.addEventListener('blur', checkValide);



// vérification de la validité du champ mail
function mailValide() {
    let mailValide = mail.value.trim();
    console.log(mailValide)
    let formMail = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    if (mailValide == '') {
        mail.style.border = "2px solid red";
        mailErreur.textContent = "Le champ ne doit pas être vide"
        
    }else{
        if(!formMail.test(mailValide)){
            console.log(formMail.test(mailValide))  //si le test renvoie false. Le message d'erreur
            mail.style.border = "2px solid red";
            mailErreur.textContent = "Le format mail n'est pas respecté";
        }else{
        mail.style.border = "2px solid green";;
        mailErreur.textContent = ""; 
        }
    }
}
mail.addEventListener('blur', mailValide);




})  // fin de la commande qui vérifie le DOM
