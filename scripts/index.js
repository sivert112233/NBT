import {GuessShelfLocation} from "./guessLocation.js";

const run = new GuessShelfLocation();

document.querySelector('.begin').addEventListener('click', () => {
  run.run();
});

