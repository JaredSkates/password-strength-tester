document.getElementById('password').addEventListener('input', function() {
    const password = this.value; // Gets the value of whatever is stored in the input
    const passwordStrengthElement = document.getElementById('password-strength'); // Stores the value that determines strength of password
    const numberCounter = document.getElementById('number-counter'); // Stores the length of input

    // Update character count display
    numberCounter.textContent = password.length;

    // Check for password strength criteria; Variables return boolean values
    const hasLowerCase = /[a-z]/.test(password); // Check for lower cases
    const hasUpperCase = /[A-Z]/.test(password); // Check for upper cases
    const hasNumbers = /\d/.test(password); // Check for numbers
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Check for symbols
    
    // Algorithm to Determines password strength
    if (password.length === 0) {
        passwordStrengthElement.textContent = "No Password";
    } else if (password.length < 6) { 
        passwordStrengthElement.textContent = "Weak Password";
    } else if (hasLowerCase && hasUpperCase && hasNumbers && hasSymbols && password.length >= 8) {
        passwordStrengthElement.textContent = "Strong Password";
    } else {
        passwordStrengthElement.textContent = "Moderate Password";
    }

    // Rule Checker; If a certain rule is within the input, the color of text changes
    if(hasLowerCase) {
        document.getElementById('lowerCase').style.color = "red";
    }
    else {
        document.getElementById('lowerCase').style.color = "black";   
    }

    if(hasNumbers) {
        document.getElementById('numbers').style.color = "red";
    }
    else {
        document.getElementById('numbers').style.color = "black";
    }

    if(hasUpperCase) {
        document.getElementById('upperCase').style.color = "red";
    }
    else {
        document.getElementById('upperCase').style.color = "black";
    }

    if(hasSymbols) {
        document.getElementById('symbols').style.color = "red";
    }
    else {
        document.getElementById('symbols').style.color = "black";
    }

});