const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    message.textContent = "Please enter username and password";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters";
    message.style.color = "red";
    return;
  }

  message.textContent = "Welcome, " + username + "!";
  message.style.color = "green";
  console.log("Login successful for:", username);
});