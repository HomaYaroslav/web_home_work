const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const emailList = document.getElementById("emailList");

let emails = JSON.parse(localStorage.getItem("emails")) || [];
let editingIndex = null;

function isValidEmail(email) {
    if (typeof email !== 'string') return false;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email.trim());
}

function displayEmails() {
    emailList.innerHTML = "";
    emails.forEach((email, index) => {
        const li = document.createElement("li");
        
        const emailText = document.createElement("span");
        emailText.textContent = email;
        emailText.className = "email-text";
        
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "email-buttons";
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editEmail(index);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteEmail(index);
        
        buttonsContainer.appendChild(editBtn);
        buttonsContainer.appendChild(deleteBtn);
        
        li.appendChild(emailText);
        li.appendChild(buttonsContainer);
        emailList.appendChild(li);
    });
}

function editEmail(index) {
    emailInput.value = emails[index];
    editingIndex = index;
    emailInput.focus();
    form.querySelector('button[type="submit"]').textContent = "Оновити email";
    error.textContent = "";
}

function deleteEmail(index) {
    emails.splice(index, 1);
    localStorage.setItem("emails", JSON.stringify(emails));
    displayEmails();
}

displayEmails();

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    error.textContent = "";

    if (email === "") {
        error.textContent = "Поле email не може бути порожнім";
        error.style.color = "#ef4444";
        return;
    }
    
    if (email === "@." || email === "@") {
        error.textContent = "Email некоректний";
        error.style.color = "#ef4444";
        return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Email має містити @ та .";
        error.style.color = "#ef4444";
        return;
    }
    
    if (!isValidEmail(email)) {
        error.textContent = "Email некоректний";
        error.style.color = "#ef4444";
        return;
    }

    if (editingIndex !== null) {
        emails[editingIndex] = email;
        editingIndex = null;
        form.querySelector('button[type="submit"]').textContent = "Додати email";
        error.textContent = "Email оновлено!";
        error.style.color = "#22c55e";
    } else {
        emails.push(email);
        error.textContent = "Email додано!";
        error.style.color = "#22c55e";
    }
    
    localStorage.setItem("emails", JSON.stringify(emails));
    emailInput.value = "";
    displayEmails();
});