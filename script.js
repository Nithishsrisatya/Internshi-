// Registration Function
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("register-message").textContent = "Registration successful! You can now log in.";
    } else {
        document.getElementById("register-message").textContent = "Please fill out both fields.";
    }
}

// Login Function
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
