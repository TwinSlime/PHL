document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    
    if (form) {  // Check if form exists before adding event listener
        form.addEventListener("submit", function (event) {
            const email = document.getElementById("email").value;
            const confirmEmail = document.getElementById("confirm-email").value;

            if (email !== confirmEmail) {
                alert("Error: The email addresses do not match. Please try again.");
                event.preventDefault(); 
            }
        });
    }
});
