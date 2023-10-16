"use strict";

let inputNumber = document.querySelector("#controls input[type=number]");
let outputBoxes = document.querySelector("#boxes");
const inputCreateBoxes = document.querySelector("[data-create]");
const inputDestroyBoxes = document.querySelector("[data-destroy]");
let amountOfBoxes = 0;

inputCreateBoxes.addEventListener("click", createBoxesHandler);
inputDestroyBoxes.addEventListener("click", destroyBoxesHandler);

function createBoxesHandler() {
  createBoxes(inputNumber.value);
}

function destroyBoxesHandler() {
  destroyBoxes();
}

function createBoxes(amount) {
  let baseSize = 0;

  if (amountOfBoxes === 0){
    baseSize = 30;
  } else {
    baseSize = 30 + (10 * amountOfBoxes);
  }
  
  let width = baseSize;
  let height = baseSize;

  for (let i = 0; i < amount; i++) {
    createBox(width, height);
    width += 10;
    height += 10;
  }
}

function createBox(width, height) {
  const newElement = document.createElement("div");
  newElement.style.width = `${width}px`;
  newElement.style.height = `${height}px`;
  newElement.style.backgroundColor = getRandomHexColor();
  outputBoxes.appendChild(newElement);
  amountOfBoxes += 1;
}

function destroyBoxes() {
  outputBoxes.innerHTML = "";
  amountOfBoxes = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}