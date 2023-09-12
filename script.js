document.addEventListener("DOMContentLoaded", function () {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");

    // Signup
    signup.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if email already exists in localStorage
        if (localStorage.getItem(email)) {
            alert("email already exists. try another one");
        } else {
            // Store email and password in localStorage
            localStorage.setItem(email, password);
            alert("Signup successful! You can now login.");
        }

        // Clear signup form
        signup.reset();
    });

    // Login logic
    login.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("loginPassword").value;

        // Check if email exists and the password is correct
        const storedPassword = localStorage.getItem(email);

        if (storedPassword === null) {
            alert("email not found.");
        } else if (password === storedPassword) {
            alert("Login successful!");
        } else {
            alert("Incorrect password. Please try again.");
        }

        // Clear login form
        login.reset();
    });
});