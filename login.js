const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener("click", function () {

    const email = loginEmail.value;
    const password = loginPassword.value;

    if (email === "" || password === "") {
        loginMessage.textContent = "Veuillez remplir tous les champs";
        loginMessage.style.color = "red";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFound = users.find(user =>
        user.email === email && user.password === password
    );

    if (userFound) {
        loginMessage.textContent = "Connexion réussie 👍";
        loginMessage.style.color = "green";
    } else {
        loginMessage.textContent = "Email ou mot de passe incorrect";
        loginMessage.style.color = "red";
    }
});