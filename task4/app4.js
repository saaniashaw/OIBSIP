let loginContainerE1 = document.getElementById("loginContainer");
let loginEmailE1 = document.getElementById("loginEmail");
let loginPasswordE1 = document.getElementById("loginPassword");
let loginErrorMessageE1 = document.getElementById("loginErrorMessage");
let loginPasswordErrorMessageE1 = document.getElementById("loginPasswordErrorMessage");
let alreadyExistErrorMessageE1 = document.getElementById("alreadyExistErrorMessage");

let registerContainerE1 = document.getElementById("registerContainer");
let registerEmailE1 = document.getElementById("registerEmail");
let registerPasswordE1 = document.getElementById("registerPassword");
let registerErrorMessageE1 = document.getElementById("registerErrorMessage");
let registerPasswordErrorMessageE1 = document.getElementById("registerPasswordErrorMessage");
let registrationMessageE1 = document.getElementById("registrationMessage");

let successDashboardE1 = document.getElementById("successDashboard");
let loggedInUserE1 = document.getElementById("loggedInUser");

function showRegisterForm() {
    console.log("showRegisterForm clicked");
    loginContainerE1.classList.add("d-none");
    registerContainerE1.classList.remove("d-none");
    registrationMessageE1.classList.add("d-none");
}

function showLoginForm() {
    console.log("showLoginForm clicked");
    loginContainerE1.classList.remove("d-none");
    registerContainerE1.classList.add("d-none");
}

function isValidPassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password);
}

function isUsernameAvailable(username) {
    return !localStorage.getItem(username);
}

function register() {
    let username = registerEmailE1.value;
    let password = registerPasswordE1.value;
    let registrationMessage = registrationMessageE1;
    let registerErrorMessage = registerErrorMessageE1;
    let registerPasswordErrorMessage = registerPasswordErrorMessageE1;

    registrationMessage.classList.add("d-none");
    registerErrorMessage.textContent = '';
    registerPasswordErrorMessage.textContent = '';

    if (!username) {
        registerErrorMessage.textContent = 'Please Enter a Username.';
    } else if (!isValidPassword(password)) {
        registerPasswordErrorMessage.textContent = 'Please enter a valid password of atleast 8 characters.';
    } else if (!isUsernameAvailable(username)) {
        registerErrorMessage.textContent = 'Username already exists. Please choose a different username.';
    } else {
        localStorage.setItem(username, password);
        registrationMessage.textContent = 'Registration successful!';
        registrationMessage.classList.remove("d-none");
        registerEmailE1.value = '';
        registerPasswordE1.value = '';
    }
}

function login() {
    let username = loginEmailE1.value;
    let password = loginPasswordE1.value;

    loginErrorMessageE1.textContent = '';
    loginPasswordErrorMessageE1.textContent = '';

    if (localStorage.getItem(username) === password) {
        loginContainerE1.classList.add("d-none");
        successDashboardE1.classList.remove("d-none");
        loggedInUserE1.textContent = username;
    } else if (!username) {
        alreadyExistErrorMessageE1.textContent = '';
        loginErrorMessageE1.textContent = 'Please enter a username.';
    } else if (!isValidPassword(password)) {
        loginPasswordErrorMessageE1.textContent = 'Please enter a valid password of atleast 8 characters.';
        alreadyExistErrorMessageE1.textContent = '';
    } else {
        alreadyExistErrorMessageE1.textContent = 'Invalid username or password.';
    }

}

function logout() {
    successDashboardE1.classList.add("d-none");
    loginContainerE1.classList.remove("d-none");
    loginEmailE1.value = '';
    loginPasswordE1.value = '';
}