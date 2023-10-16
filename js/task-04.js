"use strict";

let bgColor = document.querySelector("body");
let outputBgColor = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");
colorButton.addEventListener('click', changeBgColor);

function changeBgColor(){
    let newColor = getRandomHexColor();
    bgColor.style.backgroundColor = newColor;
    outputBgColor.textContent = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}