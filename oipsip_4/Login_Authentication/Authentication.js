function store() {
  event.preventDefault();
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  localStorage.setItem("userName", userName);
  localStorage.setItem("password", password);
  alert("Registration successful!");
  window.open("index1.html");
}
function check() {
  event.preventDefault();
  const userName = document.getElementById("name").value;
  const password = document.getElementById("pass").value;

  const storedUserName = localStorage.getItem("userName");
  const storedPassword = localStorage.getItem("password");

  if (userName === storedUserName && password === storedPassword) {
    alert("Validation successful!");
    document.getElementById("show_off").style.display = "none";
    window.open("Successful.html");
  } else {
    alert("Validation failed. Please check your credentials.");
  }
}
