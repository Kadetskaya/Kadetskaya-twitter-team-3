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
        error = false;
        firstName.style.border = "0";
        firstName.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        firstName.style.borderBottom = "2px solid red";
    }

    if (lastName.value.match(/^[A-Za-z-]{3,30}$/)) {
        error = false;
        lastName.style.border = "0";
        lastName.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        lastName.style.borderBottom = "2px solid red";
    }

    if (email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)) {
        error = false;
        email.style.border = "0";
        email.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        email.style.borderBottom = "2px solid red";
    }

    if (userNames.value.match(/^[A-Za-z-]{3,30}$/)) {
        error = false;
        userNames.style.border = "0";
        userNames.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        userNames.style.borderBottom = "2px solid red";
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
        error = false;
        password.style.border = "0";
        password.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        password.style.borderBottom = "2px solid red";
    }

    if (confirmPassword.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g) && (password.value == confirmPassword.value)) {
        error = false;
        confirmPassword.style.border = "0";
        confirmPassword.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = true;
        confirmPassword.style.borderBottom = "2px solid red";
    }

    if (error == false) {
        window.location = 'main-page.html';
    }
}
