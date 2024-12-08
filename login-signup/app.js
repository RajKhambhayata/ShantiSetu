document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const toSignup = document.getElementById('to-signup');
    const toLogin = document.getElementById('to-login');
    const toLoginFromForgot = document.getElementById('to-login-from-forgot');
    const forgotPasswordBtn = document.getElementById('forgot-password-btn');

    // Switch between login and signup forms
    loginBtn.addEventListener('click', function () {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    signupBtn.addEventListener('click', function () {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        forgotPasswordForm.style.display = 'none';
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    toSignup.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    });

    toLogin.addEventListener('click', function (e) {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });

    // Forgot Password Button
    forgotPasswordBtn.addEventListener('click', function () {
        loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
    });

    toLoginFromForgot.addEventListener('click', function (e) {
        e.preventDefault();
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Simple validation (replace with backend logic in real-world)
        if (email === 'user@example.com' && password === 'password123') {
            alert('Login successful!');
            // Redirect to another page or dashboard
        } else {
            alert('Invalid credentials, please try again.');
        }
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        // Simple validation (replace with backend logic in real-world)
        if (password === confirmPassword) {
            alert('Signup successful! Welcome, ' + name);
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else {
            alert('Passwords do not match.');
        }
    });

    // Handle forgot password form submission
    forgotPasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('forgot-email').value;

        // Simple validation (replace with backend logic in real-world)
        if (email === 'user@example.com') {
            alert('A password reset link has been sent to your email.');
            forgotPasswordForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            alert('Email not found. Please try again.');
        }
    });
});
