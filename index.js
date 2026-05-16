const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const message = document.getElementById("message");

button.addEventListener("click", function () {

    const nomValue = nom.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    // Vérifier les champs
    if (nomValue === "" || emailValue === "" || passwordValue === "") {
        message.textContent = "Veuillez remplir tous les champs";
        message.style.color = "red";
        return;
    }

    // Récupérer users depuis localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Ajouter user جديد
    users.push({
        nom: nomValue,
        email: emailValue,
        password: passwordValue
    });

    
    localStorage.setItem("users", JSON.stringify(users));

    
    message.textContent = "Inscription réussie !";
    message.style.color = "green";

   
    nom.value = "";
    email.value = "";
    password.value = "";
});