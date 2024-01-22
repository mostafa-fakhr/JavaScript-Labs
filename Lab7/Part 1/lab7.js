let submit = document.getElementById("logInForm");

function confirmData(e) {
  e.preventDefault();
  const userName = document.getElementById("username").value;
  const message = document.getElementById("message");
  const password = document.getElementById("password").value;
  const login = {
    username: userName,
    password: password,
  };
  if (login.username === "admin" && login.password === "123") {
    message.innerHTML = "Welcome";
  } else {
    message.innerHTML = "Not Registered";
  }
  console.log(userName);
}
submit.addEventListener("submit", confirmData);
