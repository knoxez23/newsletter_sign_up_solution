document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const resultMessage = document.getElementById("result");

    emailForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value;

        if (!isValidEmail(email)) {
            resultMessage.textContent = " Valid email required ";
            resultMessage.classList.add("error-message");
            emailInput.parentElement.classList.add("error"); // Add .error class to parent container
            emailInput.classList.add("error"); // Add .error class to input
            return;
        }

        // Clear error styles if email is valid
        resultMessage.textContent = "";
        resultMessage.classList.remove("error-message");
        emailInput.parentElement.classList.remove("error");
        emailInput.classList.remove("error");

        // Store the email in localStorage
        localStorage.setItem("userEmail", email);

        // Clear previous result message
        resultMessage.textContent = "";

        // Redirect to another page
        window.location.href = "thankYou.html";
    });

    function isValidEmail(email) {
        // Simple email validation using a regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
