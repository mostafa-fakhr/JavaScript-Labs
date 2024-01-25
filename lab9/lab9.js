function validateForm(e) {
  e.preventDefault();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const email = document.querySelector("#username");
  const password = document.querySelector("#password");

  if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
    alert("Login successful!");
  } else if (
    !emailRegex.test(email.value) &&
    passwordRegex.test(password.value)
  ) {
    alert("Invalid email.");
  } else if (
    emailRegex.test(email.value) &&
    !passwordRegex.test(password.value)
  ) {
    alert("Invalid password.");
  } else {
    alert("Invalid email and password.");
  }
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", validateForm);
