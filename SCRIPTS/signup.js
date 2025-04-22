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

    const fullName = form.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
    const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
    const password = form.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = form.querySelector('input[placeholder="Confirm Password"]').value;

    // Check if all fields are filled
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      showError("Please fill in all fields.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    // Password length check
    if (password.length < 6) {
      showError("Password must be at least 6 characters.");
      return;
    }

    // Password match check
    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    // Check for existing user
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      showError("Email is already taken. Please use another.");
      return;
    }

    // Save user
    users.push({ fullName, email, phone, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify({ email, fullName }));

    errorMsg.textContent = ""; // Clear any existing error
    window.location.href = "index.html"; // Redirect
  });
});
