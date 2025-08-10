import {GuessShelfLocation} from "./guessLocation.js";

document.querySelector('.dropdownHome').addEventListener('click', () => {
  location.reload();
});

document.querySelector('.dropdownHylle').addEventListener('click', () => {
  new GuessShelfLocation().runCodeAndRenderPage();
});

document.querySelector('.dropdownDiv').addEventListener('click', () => {
  new GuessShelfLocation().runAndRenderCompletedCode();
});