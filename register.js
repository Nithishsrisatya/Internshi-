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

