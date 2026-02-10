const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editingIndex = null;

function displayNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        
        const noteText = document.createElement("span");
        noteText.textContent = note;
        noteText.className = "note-text";
        
        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "note-buttons";
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.className = "edit-btn";
        editBtn.onclick = () => editNote(index);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => deleteNote(index);
        
        buttonsContainer.appendChild(editBtn);
        buttonsContainer.appendChild(deleteBtn);
        
        li.appendChild(noteText);
        li.appendChild(buttonsContainer);
        notesList.appendChild(li);
    });
}

function editNote(index) {
    input.value = notes[index];
    editingIndex = index;
    input.focus();
    form.querySelector('button[type="submit"]').textContent = "Оновити нотатку";
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const noteText = input.value.trim();
    if (noteText === "") return;

    if (editingIndex !== null) {
        notes[editingIndex] = noteText;
        editingIndex = null;
        form.querySelector('button[type="submit"]').textContent = "Додати нотатку";
    } else {
        notes.push(noteText);
    }
    
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    displayNotes();
});