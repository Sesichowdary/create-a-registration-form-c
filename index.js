const form = document.getElementById('registration-form');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const emailField = document.getElementById('email');
const termsCheckbox = document.getElementById('terms');
const nameField = document.getElementById('name');
const mobileField = document.getElementById('mobile');

form.addEventListener('submit', function (event) {
    if (passwordField.value !== confirmPasswordField.value) {
        alert('Passwords do not match.');
        event.preventDefault();
    }

    if (!isValidEmail(emailField.value)) {
        alert('Invalid email format.');
        event.preventDefault();
    }

    if (!isValidName(nameField.value)) {
        alert('Invalid name format. Please enter a valid name.');
        event.preventDefault();
    }

    if (!isValidMobile(mobileField.value)) {
        alert('Invalid mobile number format. Please enter a valid 10-digit number.');
        event.preventDefault();
    }

    if (!isStrongPassword(passwordField.value)) {
        alert('Password should be strong: at least 8 characters, containing uppercase, lowercase, numbers, and special characters.');
        event.preventDefault();
    }

    if (!termsCheckbox.checked) {
        alert('Please accept the terms and conditions.');
        event.preventDefault();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name) && name.length >= 4;
}

function isValidMobile(mobile) {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}

function isStrongPassword(password) {
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}