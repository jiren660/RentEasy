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
      errorMsg.textContent = "";

       const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
        const password = form.querySelector('input[placeholder="Password"]').value;

  