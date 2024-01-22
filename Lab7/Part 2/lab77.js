// lab7_part2.js

const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Must write something");
  } else {
    let li = document.createElement("li");
    li.classList.add("todo-item");

    let textSpan = document.createElement("span");
    textSpan.classList.add("todo-text");
    textSpan.innerHTML = inputBox.value;
    li.appendChild(textSpan);

    let doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.classList.add("action-button", "done-button");
    doneButton.addEventListener("click", function () {
      li.classList.toggle("done");
    });
    li.appendChild(doneButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("action-button", "delete-button");
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(deleteButton);

    list.appendChild(li);
  }
  inputBox.value = "";
}
