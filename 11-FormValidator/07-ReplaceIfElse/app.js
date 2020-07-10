const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show Error
showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.classList = 'form-control error';
    formControl.querySelector('small').innerText = message;
}

//Show success
showSuccess = input => {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

//Check whether the mail id is valid
checkValidEmail = input => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is invalid');
    }
}

//Checking if the input is blank
checkRequired = inputArray => {
    inputArray.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getField(input.id)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check length of the field
checkLength = ( input, min, max) => {
    console.log('check lenght');
    if (input.value.length < min){
        showError(input, `${getField(input.id)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getField(input.id)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//check passwords match
checkPassword = (input1, input2) => {
    if (input2.value !== input1.value) {
        showError(input2, 'Passwords do not match')
    } else {
        showSuccess(input2);
    }
}

//get the field name correct 
getField = input => {
    return (input[0].toUpperCase() + input.slice(1));
}

//Event submit
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkValidEmail(email);
    checkPassword(password, password2);
});