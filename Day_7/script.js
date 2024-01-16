// script.js
function addTask() {
  const newTask = document.getElementById("new-task").value;
  const list = document.getElementById("task-list");
  const item = document.createElement("li");

  item.textContent = newTask;
  item.addEventListener("click", function() {
    this.classList.toggle("completed");
  });
  item.addEventListener("dblclick", function() {
    this.remove();
  });

  list.appendChild(item);
  document.getElementById("new-task").value = "";
}
