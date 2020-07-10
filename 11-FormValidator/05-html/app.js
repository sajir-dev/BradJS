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

showSuccess = input => {
    const formControl = input.parentElement;
    formControl.classList = 'form-control success';
}

isValidEmail = emailInput => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
}


//Event submit
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();

    //Checking for username
    if (username.value === '') {
        showError(username, 'Username required');
    } else {
        showSuccess(username);
    }

    //Checking for email
    if (email.value === '') {
        showError(email, 'Email is required')
    } else if(!isValidEmail(email.value)){
        showError(email, 'Invalid email');
    }
    else {
        showSuccess(email);
    }

    //Check password
    if (password.value===''){
        showError(password, 'Password required');
    } else {
        showSuccess(password);
    }

    //Check password2
    if (password2.value==='') {
        showError(password2, 'Password 2 required');
    } else {
        showSuccess(password2);
    }

});