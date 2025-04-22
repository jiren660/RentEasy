$(document).ready(function () {
    $('#propertyForm').on('submit', function (e) {
      e.preventDefault();
  
      // Simulate a successful submission (you can hook this to backend later)
      $('#successMessage').removeClass('hidden');
  
      // Optional: Clear form fields
      $(this).trigger('reset');
  
      // Hide message after 3 seconds
      setTimeout(() => {
        $('#successMessage').addClass('hidden');
      }, 3000);
    });
  });
  