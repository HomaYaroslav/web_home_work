const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.textContent = note;
        notesList.appendChild(li);
    });
}

displayNotes();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const noteText = input.value.trim();
    if (noteText === "") return;

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    displayNotes();
});
