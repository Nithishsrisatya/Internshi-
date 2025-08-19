function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        window.location.href = "home.html"; // Redirect to home page upon successful login
    } else {
        document.getElementById("message").textContent = "Incorrect username or password.";
    }
}

// Add event listener for login button
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector("button[type='submit']");
    if (loginButton) {
        loginButton.addEventListener("click", function(e) {
            e.preventDefault();
            login();
        });
    }
});

// Add Enter key support for login
document.addEventListener("DOMContentLoaded", function() {
    const loginUsername = document.getElementById("login-username");
    const loginPassword = document.getElementById("login-password");
    
    if (loginUsername) {
        loginUsername.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                login();
            }
        });
    }
    
    if (loginPassword) {
        loginPassword.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                login();
            }
        });
    }
});
