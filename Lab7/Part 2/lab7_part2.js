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
    let buttonsWrapper = document.createElement("div");
    buttonsWrapper.classList.add("buttons-wrapper");

    let img1 = document.createElement("img");
    img1.src = "images/checked.jpg";
    img1.classList.add("action-img");
    img1.addEventListener("click", function () {
      li.classList.toggle("checked");
    });
    buttonsWrapper.appendChild(img1);

    let deleteButton = document.createElement("div");
    deleteButton.innerHTML = "x";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      // Add your logic for deleting the task (optional)
      li.remove();
    });
    buttonsWrapper.appendChild(deleteButton);
    li.appendChild(buttonsWrapper);
    list.appendChild(li);
  }
  inputBox.value = ""; // Use an empty string for better consistency
}
