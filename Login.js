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
