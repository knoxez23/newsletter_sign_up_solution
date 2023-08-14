document.addEventListener("DOMContentLoaded", function() {
    const displayEmail = document.getElementById("displayEmail");

    // Retrieve the stored email from localStorage
    const userEmail = localStorage.getItem("userEmail");

    // Display the email on the page
    if (userEmail) {
        displayEmail.textContent =  userEmail + ".";
    } else {
        displayEmail.textContent = "Email not found.";
    }
});

function closeWindow() {
    const windowToClose = window.open("", "_self");
    windowToClose.close();
}