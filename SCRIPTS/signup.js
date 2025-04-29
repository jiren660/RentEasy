document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const errorMsg = document.getElementById("errorMsg");

  function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add("vibrate");
    setTimeout(() => errorMsg.classList.remove("vibrate"), 300);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const termsChecked = document.getElementById("terms").checked;

    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      showError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      showError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    if (!termsChecked) {
      showError("You must agree to the Terms & Conditions.");
      return;
    }

    const fullName = `${firstName} ${lastName}`;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      showError("Email is already taken. Please use another.");
      return;
    }

    users.push({ fullName, email, phone, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify({ email, fullName }));

    errorMsg.textContent = ""; // Clear any existing error
    window.location.href = "index.html"; // Redirect
  });
});
