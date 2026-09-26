const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    taskInput.style.border = "1px solid red";
    taskInput.placeholder = "Please Enter a Task";
    return;
  }
  taskInput.style.border = "1px solid #ccc";

  //create a new list item
  const li = document.createElement("li");

  //create a span to hold the task text
  const span = document.createElement("span");

  span.className = "task-text";
  span.textContent = taskText;

  const btnGrp = document.createElement("div");
  btnGrp.className = "btn-grp";

  li.appendChild(span);
  taskList.appendChild(li);

  //cleaer the input box
  taskInput.value = "";
  taskInput.focus();
}
