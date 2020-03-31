"use strict"

const submitBtn = document.getElementById('submitBtn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const userNames = document.getElementById('usernamePerson');
const dateOfBirth = document.getElementById('dateOfBirth');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

submitBtn.addEventListener('click', checkInput);
let error = true;


function checkInput() {
    if (firstName.value.match(/^[A-Za-z-]{3,30}$/)) {
        error = true;
        firstName.style.border = "0";
        firstName.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        firstName.style.border = "1px solid red";
    }

    if (lastName.value.match(/^[A-Za-z-]{3,30}$/)) {
        error = true;
        lastName.style.border = "0";
        lastName.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        lastName.style.border = "1px solid red";
    }

    if (email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
        error = true;
        email.style.border = "0";
        email.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        email.style.border = "1px solid red";
    }

    if (userNames.value.match(/^[A-Za-z-]{3,30}$/)) {
        error = true;
        userNames.style.border = "0";
        userNames.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        userNames.style.border = "1px solid red";
    }

    // if( dateOfBirth.value.match(/^\S[a-zа-я0-9_]+/i) ) {
    //     error = true;
    //     dateOfBirth.style.border = "0";
    //     dateOfBirth.style.borderBottom = "2px solid #DEE2E6";
    // } else {
    //     error = false;
    //     dateOfBirth.style.border = "1px solid red";
    // }

    if (password.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g)) {
        error = true;
        password.style.border = "0";
        password.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        password.style.border = "1px solid red";
    }

    if (confirmPassword.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g) && (password.value == confirmPassword.value)) {
        error = true;
        confirmPassword.style.border = "0";
        confirmPassword.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        confirmPassword.style.border = "1px solid red";
    }

    if (error == true) {
        window.location = 'http://localhost:63342/twitter-team-3/build/main.html?_ijt=hvtpv84dvu7hnlpckt4l26upks'
    }
}
