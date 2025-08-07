import {GuessShelfLocation} from "./guessLocation.js";

document.querySelector('.begin').addEventListener('click', () => {
  new GuessShelfLocation().runCodeAndRenderPage();
});

