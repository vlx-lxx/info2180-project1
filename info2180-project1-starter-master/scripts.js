// Javon Laing - Info2180 Project 1 #JS
/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter form");
  const message = document.querySelector(".newsletter .message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById("email");
    const enteredEmail = emailInput.value;

    if (enteredEmail && validateEmail(enteredEmail)) {
      // Valid email address entered
      message.textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list!`;
    } else {
      // No email entered or invalid email
      message.textContent = "Please enter a valid email address.";
    }
  });
});

// Function to validate email format
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
