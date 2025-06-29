const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "削除";
  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
});
