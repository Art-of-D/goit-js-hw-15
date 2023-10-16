"use strict";

let validInp = document.querySelector("#validation-input");
validInp.addEventListener("blur", validation);

function validation(){
    if (validInp.value.length === 6){
        validInp.classList.remove("invalid");
        validInp.classList.add("valid");
    } else {
        validInp.classList.remove("valid");
        validInp.classList.add("invalid");
    }
}
