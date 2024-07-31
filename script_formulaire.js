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
function isNomValide() {
    let isNomValide = name.value.trim();
    if (isNomValide == '') {
        name.style.border = "2px solid red";
        nameErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        name.style.border = "2px solid green";;
        nameErreur.textContent = "";
        return true;
    }
}
name.addEventListener('blur', isNomValide);

// On peut factoriser la fonction pour ne pas avoir besoin de répéter le code
/*let isEmpty =(e)=>{
    let elem = e.target;
    let elemValue =elem.value
    if (isEmpty != '') {
        elem.style.border = "2px solid red";
        elem.textContent = "Le champ ne doit pas être vide"     //--- Solution pour afficher le texte pas encore trouvé ---//
        return false;
    }else{
        elem.style.border = "2px solid green";;
        elem.textContent = "";  //--- Solution pour afficher le texte pas encore trouvé ---//
        return true;
    }
}
// il suffir juste d'appeler la fonction quand on passe sur l'élément désiré. Ici prénom.
prenom.addEventListener('blur', isEmpty);*/

// vérification de la validité du champ prenom
function isPrenomValide() {
    let isPrenomValide = prenom.value.trim();
    if (isPrenomValide == '') {
        prenom.style.border = "2px solid red";
        prenomErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        prenom.style.border = "2px solid green";;
        prenomErreur.textContent = "";
        return true;
    }
}
prenom.addEventListener('blur', isPrenomValide);


// vérification de la validité du champ pseudo
function isPseudoValide() {
    let isPseudoValide = pseudo.value.trim();
    if (isPseudoValide == '') {
        pseudo.style.border = "2px solid red";
        pseudoErreur.textContent = "Le champ ne doit pas être vide";
        return false;
    }else{
        pseudo.style.border = "2px solid green";;
        pseudoErreur.textContent = "";
        return true;
    }
}
pseudo.addEventListener('blur', isPseudoValide);

// vérification de la validité du champ text
function isTextValide() {
    let isTextValide = message.value.trim();
    if (isTextValide == '') {
        message.style.border = "2px solid red";
        textErreur.textContent = "Le champ ne doit pas être vide";
        return false;
    }else{
        message.style.border = "2px solid green";;
        textErreur.textContent = "";
        return true;
    }
}
message.addEventListener('blur', isTextValide); // 'blur' pour le changement d'input



// vérification de la validité du champ checkbox
function isCheckValide (){
    if (checkbox.checked == true){
        let isCheckValide = document.getElementById(checkErreur)
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
checkbox.addEventListener('blur', isCheckValide);



// vérification de la validité du champ mail
function isMailValide() {
    let isMailValide = mail.value.trim();
  
    let formMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (isMailValide == '') {
        mail.style.border = "2px solid red";
        mailErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        if(!formMail.test(isMailValide)){
            console.log(formMail.test(isMailValide))  //si le test renvoie false. Le message d'erreur forma est affiché
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
mail.addEventListener('blur', isMailValide);

// Vérification du bouton envoyer
contactBtn.addEventListener ('click',(e)=>{
    e.preventDefault(); // empèche l'envoi du formulaire
console.log(e)

    if (!isNomValide()|| !isPrenomValide() || !isPseudoValide() || !isTextValide() || !isCheckValide() || !isMailValide()){  // si formulaire false = message d'erreur
        envoiFormulaire.textContent = "Votre formulaire présente des erreurs et ne peut donc pas être envoyé.";
        envoiFormulaire.style.color = "red"; 
    } else{
        champ.submit();
        alert("Formulaire Envoyé");
    }
})


})  // fin de la commande qui vérifie le DOM
