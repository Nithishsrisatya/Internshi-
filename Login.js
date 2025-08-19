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
document.getElementById("login-button").addEventListener("click", login);
document.getElementById("login-username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
function register(){
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("register-message").textContent = "Registration successful!";
}
document.getElementById("register-button").addEventListener("click", register);
document.getElementById("register-username").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        register();
    }
});