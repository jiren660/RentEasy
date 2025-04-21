$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
      e.preventDefault();
  
      const email = $('#email').val();
      const password = $('#password').val();
  
      if (email === "user@gmail.com" && password === "user123") {
        
        localStorage.setItem("isLoggedIn", "true");
  
        
        const popup = `
          <div class="login-popup">
            <div class="popup-content">
              <h2>Login Successful!</h2>
              <p>Redirecting to the homepage...</p>
            </div>
          </div>
        `;
        $('body').append(popup);
  
        
        $('body').css('pointer-events', 'none');
  
        
        setTimeout(function () {
          window.location.href = "index.html"; 
        }, 2000);
      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  });
  