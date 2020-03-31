"use strict"

const addTwittBtn = document.getElementById('addTwitt');
const addTwitt = document.getElementById('textarea');
const textareaDanger = document.getElementById('textarea-danger');

addTwittBtn.addEventListener('click', checkInput);
let error = true;
let result;
function checkInput() {
    if( addTwitt.value.match(/([A-Za-z0-9_\-!@#$%^&*]{3,140})/
    ) ) {
        error = true;
        addTwitt.style.border = "0";
        addTwitt.style.borderBottom = "2px solid #DEE2E6";
        textareaDanger.style.display = "none";

    } else {
        error = false;
        addTwitt.style.border = "1px solid red";
        textareaDanger.style.display = "block";
    }
}