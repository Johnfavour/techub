// // Login Form Validation
// function validateLoginForm() {
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;
//     let valid = true;

//     // Reset error messages
//     document.getElementById('loginEmailError').style.display = 'none';
//     document.getElementById('loginPasswordError').style.display = 'none';
//     document.getElementById('loginSuccess').style.display = 'none';

//     // Email validation
//     if (!validateEmail(email)) {
//         document.getElementById('loginEmailError').innerText = 'Please enter a valid email address.';
//         document.getElementById('loginEmailError').style.display = 'block';
//         valid = false;
//     }

//     // Password validation: At least 6 characters long and contains letters and numbers
//     if (!validatePassword(password)) {
//         document.getElementById('loginPasswordError').innerText = 'Password must be at least 6 characters long and contain both letters and numbers.';
//         document.getElementById('loginPasswordError').style.display = 'block';
//         valid = false;
//     }

//     // If form is valid, show success message
//     if (valid) {
//         document.getElementById('loginSuccess').innerText = 'Login successful!';
//         document.getElementById('loginSuccess').style.display = 'block';
//     }

//     return valid;
// }

// // Signup Form Validation
// function validateSignupForm() {
//     const username = document.getElementById('signupUsername').value;
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
//     const confirmPassword = document.getElementById('signupConfirmPassword').value;
//     let valid = true;

//     // Reset error messages
//     document.getElementById('signupUsernameError').style.display = 'none';
//     document.getElementById('signupEmailError').style.display = 'none';
//     document.getElementById('signupPasswordError').style.display = 'none';
//     document.getElementById('signupConfirmPasswordError').style.display = 'none';
//     document.getElementById('signupSuccess').style.display = 'none';

//     // Username validation
//     if (username.trim() === "") {
//         document.getElementById('signupUsernameError').innerText = 'Username is required.';
//         document.getElementById('signupUsernameError').style.display = 'block';
//         valid = false;
//     }

//     // Email validation
//     if (!validateEmail(email)) {
//         document.getElementById('signupEmailError').innerText = 'Please enter a valid email address.';
//         document.getElementById('signupEmailError').style.display = 'block';
//         valid = false;
//     }

//     // Password validation: At least 6 characters long and contains letters and numbers
//     if (!validatePassword(password)) {
//         document.getElementById('signupPasswordError').innerText = 'Password must be at least 6 characters long and contain both letters and numbers.';
//         document.getElementById('signupPasswordError').style.display = 'block';
//         valid = false;
//     }

//     // Confirm Password validation
//     if (password !== confirmPassword) {
//         document.getElementById('signupConfirmPasswordError').innerText = 'Passwords do not match.';
//         document.getElementById('signupConfirmPasswordError').style.display = 'block';
//         valid = false;
//     }

//     // If form is valid, show success message
//     if (valid) {
//         document.getElementById('signupSuccess').innerText = 'Signup successful!';
//         document.getElementById('signupSuccess').style.display = 'block';
//     }

//     return valid;
// }

// // Utility function to validate email format
// function validateEmail(email) {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

// // Utility function to validate password (at least one letter, one number, and minimum 6 characters)
// function validatePassword(password) {
//     const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
//     return passwordPattern.test(password);
// }

    
// Login Form Validation
function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let valid = true;

    // Reset error messages
    document.getElementById('loginEmailError').style.display = 'none';
    document.getElementById('loginPasswordError').style.display = 'none';
    document.getElementById('loginSuccess').style.display = 'none';

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('loginEmailError').innerText = 'Please enter a valid email address.';
        document.getElementById('loginEmailError').style.display = 'block';
        valid = false;
    }

    // Password validation: At least 6 characters long and contains letters and numbers
    if (!validatePassword(password)) {
        document.getElementById('loginPasswordError').innerText = 'Password must be at least 6 characters long and contain both letters and numbers.';
        document.getElementById('loginPasswordError').style.display = 'block';
        valid = false;
    }

    // If form is valid, show success message as an alert
    if (valid) {
        alert('Login successful!');
        document.getElementById('loginSuccess').innerText = 'Login successful!';
        document.getElementById('loginSuccess').style.display = 'block';
    }

    return valid;
}

// Signup Form Validation
function validateSignupForm() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    let valid = true;

    // Reset error messages
    document.getElementById('signupUsernameError').style.display = 'none';
    document.getElementById('signupEmailError').style.display = 'none';
    document.getElementById('signupPasswordError').style.display = 'none';
    document.getElementById('signupConfirmPasswordError').style.display = 'none';
    document.getElementById('signupSuccess').style.display = 'none';

    // Username validation
    if (username.trim() === "") {
        document.getElementById('signupUsernameError').innerText = 'Username is required.';
        document.getElementById('signupUsernameError').style.display = 'block';
        valid = false;
    }

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('signupEmailError').innerText = 'Please enter a valid email address.';
        document.getElementById('signupEmailError').style.display = 'block';
        valid = false;
    }

    // Password validation: At least 6 characters long and contains letters and numbers
    if (!validatePassword(password)) {
        document.getElementById('signupPasswordError').innerText = 'Password must be at least 6 characters long and contain both letters and numbers.';
        document.getElementById('signupPasswordError').style.display = 'block';
        valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('signupConfirmPasswordError').innerText = 'Passwords do not match.';
        document.getElementById('signupConfirmPasswordError').style.display = 'block';
        valid = false;
    }

    // If form is valid, show success message as an alert
    if (valid) {
        alert('Signup successful!');
        document.getElementById('signupSuccess').innerText = 'Signup successful!';
        document.getElementById('signupSuccess').style.display = 'block';
    }

    return valid;
}

// Utility function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Utility function to validate password (at least one letter, one number, and minimum 6 characters)
function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordPattern.test(password);
}
