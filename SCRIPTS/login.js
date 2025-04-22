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
  
      const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
      const password = form.querySelector('input[placeholder="Password"]').value;
  
      const users = JSON.parse(localStorage.getItem("users") || "[]");
  
      const user = users.find(u => u.email === email && u.password === password);
  
      if (!user) {
        showError("Invalid email or password.");
        return;
      }
  
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify({ email: user.email, fullName: user.fullName }));
  
      window.location.href = "index.html";
    });
  });
  