function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    nameError.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!nameRegex.test(name)) {
        nameError.innerHTML = 'Please enter a valid name.';
    }

    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Please enter a valid email address.';
    }

    if (!passwordRegex.test(password)) {
        passwordError.innerHTML = 'Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.';
    }
}