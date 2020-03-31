"use strict"

const submitBtn = document.getElementById('addTwitt');
const firstName = document.getElementById('textarea');
const textareaDanger = document.getElementById('textarea-danger');

submitBtn.addEventListener('click', checkInput);
let error = true;
let result;
function checkInput() {
    if( firstName.value.match(/([A-Za-z0-9_\-!@#$%^&*]{3,140})/
    ) ) {
        error = true;
        firstName.style.border = "0";
        firstName.style.borderBottom = "2px solid #DEE2E6";
        textareaDanger.style.display = "none";

    } else {
        error = false;
        firstName.style.border = "1px solid red";
        textareaDanger.style.display = "block";
    }
}