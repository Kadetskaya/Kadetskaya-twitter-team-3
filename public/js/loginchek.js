'use strict'

const submitBtn = document.getElementById('submitBtn');
const email = document.getElementById('loginEmail');
const password = document.getElementById('loginPassword');

submitBtn.addEventListener('click', checkInput);
<<<<<<< HEAD
let error = false;
let result;
=======
let error = true;

>>>>>>> a28040d77f2f3ca44edc588ff10a9c5bcdcb9327
function checkInput() {

    if( email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i) ) {
        error = false;
        email.style.border = "0";
        email.style.borderBottom = "2px solid #DEE2E6";
        
    } else {
        error = true;
        email.style.borderBottom = "2px solid red";

    }

    if( password.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g) ) {
        error = false;
        password.style.border = "0";
        password.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        password.style.borderBottom = "2px solid red";
    }

    if (error == false) {
        window.location = 'main-page.html'
    }
}
