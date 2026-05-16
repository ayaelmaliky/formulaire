const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", function () {

    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Les champs sont vides");
    } else {
        alert("Inscription réussie " + nom.value);
    }

});