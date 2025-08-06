import { BookLocationCodes } from "./books.js";

const allBooks = new BookLocationCodes().allBooks;

export class GuessShelfLocation{
  constructor() {
    this.rightGuesses = 0;
    this.wrongGuesses = 0; 
  }
  
  guessScore(guess) {
    if (guess){
      this.rightGuesses += 1;
    }else{
      this.wrongGuesses += 1;
    }
  }

  resetScore() {
    this.rightGuesses = 0;
    this.wrongGuesses = 0; 
  }

  getCurrentScore() {
    console.log(this.rightGuesses);
    console.log(this.wrongGuesses);
  }

  displayScore(){
    return document.querySelector('.js-output-book-code-resulet').innerHTML = `
    <p>Riktig: ${this.rightGuesses}</p>
    <p>Feil: ${this.wrongGuesses}</p>
    `;
  }

  getRandomBook(){
    let rendomBookCode = allBooks[Math.floor(Math.random() * allBooks.length)];
    allBooks.splice(allBooks.indexOf(rendomBookCode),1);
    console.log(rendomBookCode);
    return rendomBookCode;
  }

  guessBook(rendomBook, locationGuesst) {
    let result = false;
    locationGuesst.forEach((locationGuesst) => {rendomBook === locationGuesst && (result = 1)});
    if (result){
      return true;
    }else{
      return false;
    }
  }

  getLocation(button) {
    let resulet;
    switch(button) {
      case 'bottomLeft':
        resulet =  new BookLocationCodes().books1;
        break;
      case 'topLeftBack':
        resulet =  new BookLocationCodes().books2;
        break;
      case 'topLeftFront':
        resulet =  new BookLocationCodes().books3;
        break;  
      case 'topRightBack':
        resulet =  new BookLocationCodes().books4;
        break;
      case 'topRightMiddle':
        resulet =  new BookLocationCodes().books5;
        break;
      case 'topRightFornt':
        resulet =  new BookLocationCodes().books6;
        break;
      case 'bottomRight':
        resulet =  new BookLocationCodes().books7;
        break;
      default:
        resulet = console.log('ko');
        break;
    }
    return resulet; 
  }

  addColorToButtons(buttonId, answer) {
    if (answer){
      document.getElementById(buttonId).classList.add("bookButtonsRight");
    }else{
      document.getElementById(buttonId).classList.add("bookButtonsWrong");
    }
  }

  removeColoreFromButtons(buttonId) {
    document.getElementById(buttonId).classList.remove('bookButtonsWrong');
    document.getElementById(buttonId).classList.remove('bookButtonsRight');
  }

  run() {
    document.querySelector('main').innerHTML = `
      <section class="bookGuessing">
        <div class="output js-output-book-code-resulet"> 
          <p>Hyllelokasjon</p>
        </div>
        <div class="inputs">
          <div class="input-left">
            <div class="degText">
              <p>Venstere Side</p>
            </div>
            <div class="input-left-top">
              <button class="bookButtons bookButtonsL js-bookButtons" id="topLeftBack">53-04</button>
              <button class="bookButtons bookButtonsL js-bookButtons" id="topLeftFront">53-05(Ti/To)</button>
            </div>
            <div class="input-left-bottom"> 
              <button class="bookButtons bookButtonsL js-bookButtons" id="bottomLeft">53-01</button>
            </div>
          </div>
          <div class="input-right">
            <div class="degText">
              <p>Høyere Side</p>
            </div>
            <div class="input-right-top">
              <button class="bookButtons bookButtonsR js-bookButtons" id="topRightFornt">53-02(Ti/To)</button>
              <button class="bookButtons bookButtonsR js-bookButtons" id="topRightMiddle">53-03(Ti/Fr)</button>
              <button class="bookButtons bookButtonsR js-bookButtons" id="topRightBack">53-03(On/Fr)</button>
            </div>
            <div class="input-right-bottom">
              <button class="bookButtons bookButtonsR js-bookButtons" id="bottomRight">53-02</button>
            </div>
          </div>
        </div>
        <div class="get-book-box js-get-book-box">
          <button class="get-book-button js-get-book-button">Få Kode</button>
        </div>
      </section>
    `;

    
    let rendomBook; 
    let noCodeIsChosen = true;
    const bookGame = new GuessShelfLocation();


    function addEventListenerToGetCodeButton() {
      document.querySelector('.js-get-book-button').addEventListener('click', () => { 
        noCodeIsChosen = false;
        rendomBook = bookGame.getRandomBook();
        document.querySelectorAll('.js-bookButtons').forEach((button) => {

          bookGame.removeColoreFromButtons(button.id);

        });
        if (rendomBook){
          document.querySelector('.js-get-book-box').innerHTML = rendomBook.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");  
        }else{
          document.querySelector('.js-get-book-box').innerHTML = 'Fullføret';
        }
      });  
    }; 
    addEventListenerToGetCodeButton();

    document.querySelectorAll('.js-bookButtons').forEach((button) => {
      button.addEventListener('click', () => {
        if (noCodeIsChosen){
          alert('Velg Ny Kode.');
        }else{
          let guess = bookGame.guessBook(rendomBook, bookGame.
          getLocation(button.id));
          if (guess){
            bookGame.guessScore(guess);

            bookGame.addColorToButtons(button.id, guess);

            document.querySelector('.js-get-book-box').innerHTML = `<button class="get-book-button js-get-book-button">Ny Kode</button>`;
            addEventListenerToGetCodeButton(); //render again.
            noCodeIsChosen = true;
          }else{
            bookGame.guessScore(guess);

            bookGame.addColorToButtons(button.id, guess);
          }
          bookGame.displayScore();
        }
      });
    });
  }

}




