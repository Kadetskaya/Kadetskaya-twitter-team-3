"use strict"

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const userName = document.getElementById('username');
const bio = document.getElementById('bio');
const dateOfBirth = document.getElementById('dateOfBirth');
const currentPassword = document.getElementById('currentPassword');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const changePassword = document.getElementById('changePassword');
const updateBtn = document.getElementById('updateBtn');
let error = true;
changePassword.addEventListener('click', updatePassword);
updateBtn.addEventListener('click', updateInfo);

function updatePassword() {

    if (password.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g)) {
        error = true;
        password.style.border = "0";
        password.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        password.style.border = "1px solid red";
    }

    if (currentPassword.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g) && currentPassword != password) {
        error = true;
        currentPassword.style.border = "0";
        currentPassword.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        currentPassword.style.border = "1px solid red";
    }

    if (confirmPassword.value.match(/(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,15}/g) && confirmPassword == password) {
        error = true;
        confirmPassword.style.border = "0";
        confirmPassword.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        confirmPassword.style.border = "1px solid red";
    }


}



function updateInfo() {
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

    if (userName.value.match(/^[A-Za-z-]{3,30}$/)) {
        error = true;
        userName.style.border = "0";
        userName.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        userName.style.border = "1px solid red";
    }

    if (bio.value.match(/^{0,1000}$/)) {
        error = true;
        bio.style.border = "0";
        bio.style.borderBottom = "2px solid #DEE2E6";
    } else {
        error = false;
        bio.style.border = "1px solid red";
    }

    // if ( dateOfBirth.value == true) {
    //     error = true;
    //     dateOfBirth.style.border = "0";
    //     dateOfBirth.style.borderBottom = "2px solid #DEE2E6";
    // } else {
    //     error = false;
    //     dateOfBirth.style.border = "1px solid red";
    // }
}