import { BookLocationCodes } from "./books.js";

const allBooks = new BookLocationCodes().allBooks;

export class GuessShelfLocation{
  constructor() {
    this.rightGuesses = 0;
    this.wrongGuesses = 0; 
  }
  
  setScore(guess) {
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
  html() {
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
  }

  runCodeAndRenderPage() {
    this.html();
    let guess = false; 
    let rendomBook = undefined; 
    let noCodeIsChosen = true;

    function addEventListenerToGetCodeButton() {
      document.querySelector('.js-get-book-button').addEventListener('click', () => { 
        const output = document.querySelector('.js-get-book-box');
        guess = false;
        noCodeIsChosen = false; 
        rendomBook = allBooks[Math.floor(Math.random() * allBooks.length)];
        allBooks.splice(allBooks.indexOf(rendomBook),1);
        document.querySelectorAll('.js-bookButtons').forEach((button) => {
          new GuessShelfLocation().removeColoreFromButtons(button.id); //--?--//
        });
        rendomBook ?
          output.innerHTML = rendomBook.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")
          :
          output.innerHTML = 'Fullføret'
        ;
      });  
    }addEventListenerToGetCodeButton();

    document.querySelectorAll('.js-bookButtons').forEach((button) => {
      button.addEventListener('click', () => {
        if (noCodeIsChosen){
          return alert('Velg Ny Kode.');
        }


        this.getLocation(button.id).forEach((i) => {
          if (rendomBook === i) {
            return guess = true;
          };
        });

        if (guess){
          this.setScore(guess);
          this.addColorToButtons(button.id, guess);
          document.querySelector('.js-get-book-box').innerHTML = `<button class="get-book-button js-get-book-button">Ny Kode</button>`;
          addEventListenerToGetCodeButton();
          noCodeIsChosen = true
        }else{
          if (button.classList.contains('bookButtonsWrong')) {
            return alert('Du har allerede gjettet denne lokasjonen. Prøv en lokasjon som ikke er rød.')
          }
            this.setScore(guess);
            this.addColorToButtons(button.id, guess);
          
        }
        this.displayScore();
      });
    });
  }
}




