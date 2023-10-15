"use strict";

let inputNumber = document.querySelector("#controls input[type=number]");
let outputBoxes = document.querySelector("#boxes");
const inputCreateBoxes = document.querySelector("[data-create]");
const inputDestroyBoxes = document.querySelector("[data-destroy]");
let amountOfBoxes = 0;

inputCreateBoxes.addEventListener("click", boxesCreator);
inputDestroyBoxes.addEventListener("click", destroyBoxes);

function boxesCreator(){
  let width;
  let height;
  if (amountOfBoxes === 0) {
    width = 30;
    height = 30;
    loop(width, height);
  } else {
    width = 30 + (10 * amountOfBoxes);
    height = 30 + (10 * amountOfBoxes);
    loop(width, height);
  }
}

function loop(width, height) {
  let amount = 0;

  while (amount < inputNumber.value) {
    createBox(width, height);
    width += 10;
    height += 10;
    amount++;
  }
  
  amountOfBoxes += amount;
}

function createBox(width, height){
  const newElement = document.createElement("div");
  newElement.style.width = `${width}px`;
  newElement.style.height = `${height}px`;
  newElement.style.backgroundColor = getRandomHexColor();
  outputBoxes.prepend(newElement);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  const divElements = document.querySelectorAll("#boxes div");
  divElements.forEach(element => outputBoxes.removeChild(element));
  amountOfBoxes = 0;
}
