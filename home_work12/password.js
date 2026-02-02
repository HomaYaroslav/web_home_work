const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    error.textContent = "";

    if (email === "") {
        error.textContent = "Поле email не може бути порожнім";
    } else if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Email має містити @ і .";
    } else {
        error.textContent = "Email коректний";
    }
});
