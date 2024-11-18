document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('register-btn').addEventListener('click', register);
    document.getElementById('login-btn').addEventListener('click', login);
    document.querySelector('#welcome button').addEventListener('click', logout);

    document.querySelector('#registration a').addEventListener('click', showLogin);
    document.querySelector('#login a').addEventListener('click', showRegistration);
});

function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration successful!");
        showLogin();
    } else {
        alert("Please fill out all fields.");
    }
    window.location.href = "Practice1.html"; // Замените на вашу ссылку
    } 

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        document.getElementById('username').textContent = username;
        document.getElementById('login').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
        alert("Login successful!");

        // Перенаправление на другую страницу
        window.location.href = "Practice1.html"; // Замените на вашу ссылку
    } else {
        alert("Invalid username or password.");
    }
}


function showRegistration() {
    document.getElementById('registration').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('welcome').style.display = 'none';
}

function showLogin() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('welcome').style.display = 'none';
}
