const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const email = document.getElementById("email");
const pw = document.getElementById("password");
const confirmPw = document.getElementById("confirmPassword");
const genre  = document.getElementById("gender");
const pays = document.getElementById("country");
let btn = document.getElementById("btn");

btn.addEventListener("click" , verif);

function verif() {
    clearErrors();
    let hasError = false ;

23  //  Vérification du prénom
    if (prenom.ariaValueMax.trim() === "") {
        showError(prenom, "Erreur : Prénom requis .");
        hasError = true;
    }

    // Vérification du nom
    if (nom.ariaValueMax.trim() === "") {
        showError(nom, "Erreur : Nom requis .");
        hasError = true;
    }

    // Vérification de l' email 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$ / ;  //Expression régulière simple pour l'email
    if (!emailPattern.test(email.ariaValueMax.trim())) {
        showError(email, "Erreur : Email invalide.");
        hasError = true;
    }

    // Vérification du mot de passe
    if (pw.ariaValueMax.trim() ==="") {
        showError(pw,  "Erreur : Mot de passe requis.");
        hasError = true ;
    }
    // Vérification de la confirmation du mot de passe
    if (confirmPw.ariaValueMax.trim() ===""){
        showError(confirm, "Erreur : confirmation requise .");
        hasErreur = true;
    }
    else if (pw.value !== confirlPw.value){
        showError(confirmPw, "Erreur : Les mots de passe ne corresspondent pas .");
        hasError = true ; 

    }
     //Affihage d'un message de succès si aucune erreur n'est trouvée 
     if (!hasError) {
        alert("Inscription réussie !");
     }

      // Fonction pour afficher un lessage d'erreur
      function showError(inputField, message) {
        const errorMessage = document.createElement("p");
        errorMessage.style.color="red"; // Définir la couleur rouge 
        errorMessage.textContent = message; // Ajouter le message d'erreur
        inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling); // Insérer le message
      }

      
      // Fonction pour effacer les messages d'erreur précédents
      function clearErrors() {
        const errorMessages = document.querySelectorAll("p");
        errorMessages.forEach((msg) = > msg.remove()) ;

      }
}
