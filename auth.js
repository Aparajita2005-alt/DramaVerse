// LOGIN VALIDATION
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const email = loginForm.querySelector("input[type=email]").value;
        const password = loginForm.querySelector("input[type=password]").value;

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        alert("Login successful (demo)");
    });
}

// SIGNUP VALIDATION
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", e => {
        e.preventDefault();

        const inputs = signupForm.querySelectorAll("input");
        const password = inputs[2].value;
        const confirm = inputs[3].value;

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            alert("Password too short");
            return;
        }

        alert("Account created successfully (demo)");
    });
}
