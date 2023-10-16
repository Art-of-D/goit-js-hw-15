let email = document.querySelector("[name=email]");
let pass = document.querySelector("[name=password]");
const submitAuth = document.querySelector(".login-form");
submitAuth.addEventListener("submit", checkAndSend);

function checkAndSend(event){
    event.preventDefault();
    if (email.value.trim() === ""){
        alert("You need to enter email!");
    } else if (pass.value.trim() === ""){
        alert("You need to enter password!");
    } else {
        sender();
    }
}

function sender(event){
    let user = {};
    user.email = email.value;
    user.pass = pass.value;
    console.log(user);
    submitAuth.reset();
}