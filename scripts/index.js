import { GuessBookLoacation, Score, ButtonColor} from "./guessLocation.js";
let rendomBook; 
const score = new Score();
const bookGame = new GuessBookLoacation();
const buttonColor = new ButtonColor();
let answer = true;

document.querySelector('.js-get-book-button').addEventListener('click', () => { 
  answer = false;

  document.querySelector('.js-get-book-button').innerHTML = 'Få ny bokkode'
  rendomBook = bookGame.getRandomBook();
  document.querySelectorAll('.js-bookButtons').forEach((buttons) => {
    buttonColor.resetColor(buttons.id);
  });
});

document.querySelectorAll('.js-bookButtons').forEach((button) => {
  button.addEventListener('click', () => {
    if (answer){
      alert('Velg bok.');
    }else{
      let guess = bookGame.guessBook(rendomBook, bookGame.
      getLocation(button.id));
      if (guess){
        score.addRight();
        buttonColor.addColor(button.id, guess);
        answer = true;
      }else{
        score.addWrong();
        buttonColor.addColor(button.id, guess);
      }
      score.displayHTML();
    }
  });
});

   