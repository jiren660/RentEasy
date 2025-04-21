document.addEventListener("DOMContentLoaded", function () {
  const profileForm = document.getElementById("profileForm");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    fullNameInput.value = currentUser.fullName;
    emailInput.value = currentUser.email;
    phoneInput.value = currentUser.phone || '';
  }

  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const updatedFullName = fullNameInput.value.trim();
    const updatedPhone = phoneInput.value.trim();

    if (updatedFullName && updatedPhone) {
      currentUser.fullName = updatedFullName;
      currentUser.phone = updatedPhone;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      alert("Profile updated successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  });
});

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });
}
