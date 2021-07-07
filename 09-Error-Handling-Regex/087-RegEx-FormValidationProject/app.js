const name = document.getElementById('name').addEventListener('blur', validateName);
const email = document.getElementById('email').addEventListener('blur', validateEmail);
const pincode = document.getElementById('pincode').addEventListener('blur', validatePincode);
const phone = document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const re = /^[a-zA-Z]{2,15}$/i;
    const name = document.getElementById('name');

    console.log(name.value);

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,5}$/;
    const email = document.getElementById('email');

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid')
    }
}

function validatePincode () {
    const re = /^\d{6}$/;
    const pincode = document.getElementById('pincode');

    if (!re.test(pincode.value)) {
        pincode.classList.add('is-invalid');
    } else {
        pincode.classList.remove('is-invalid');
    }
}

function validatePhone () {
    const re = /^(\+?(\d{1,3})?)(\d{10})$/;
    const phone = document.getElementById('phone');
    
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
