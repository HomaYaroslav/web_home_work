let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

function addTask(text) {
  let li = document.createElement("li");
  li.textContent = text;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Видалити";

  delBtn.addEventListener("click", function() {
    li.remove();
    saveTasks();
  });

  li.appendChild(delBtn);
  list.appendChild(li);
}

addBtn.addEventListener("click", function() {
  let text = input.value.trim();
  if (text === "") {
    alert("Введіть завдання!");
    return;
  }
  addTask(text);
  input.value = "";
  saveTasks();
});

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}

loadTasks();