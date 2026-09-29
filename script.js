const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

// when add button click, add a new task
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

  //create update button
  const updateBtn = document.createElement("button");
  updateBtn.className = "update-btn";
  updateBtn.textContent = "Update";
  updateBtn.addEventListener("click", function () {
    //if already editing, this click means save
    if (li.classList.contains("editing")) {
      const editInput = li.querySelector(".edit-input");
      const newText = editInput.value.trim();

      if (newText !== "") {
        span.textContent = newText;
      }

      editInput.remove();
      span.style.display = "inline";
      updateBtn.textContent = "Update";
      li.classList.remove("editing");
      return;
    }

    //start editing
    li.classList.add("editing");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = span.textContent;

    span.style.display = "none";
    li.insertBefore(editInput, span);
    editInput.focus();

    updateBtn.textContent = "Save";
  });

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  btnGrp.appendChild(updateBtn);
  btnGrp.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGrp);

  //add the new task to the list
  taskList.appendChild(li);

  //cleaer the input box
  taskInput.value = "";
  taskInput.focus();
}
