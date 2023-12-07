function login() {
    // Implement login logic here
    alert("Login function called.");
}

function register() {
    // Implement register logic here
    alert("Register function called.");
}

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
