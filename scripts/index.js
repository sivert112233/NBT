import {GuessShelfLocation} from "./guessLocation.js";

const test = new GuessShelfLocation();

test.runCodeAndRenderPage();

document.querySelector('.begin').addEventListener('click', () => {
  test.runAndRenderCompletedCode();
});

