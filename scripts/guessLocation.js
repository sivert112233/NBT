import { BookLocationCodes } from "./books.js";


export class GuessBookLoacation {
  getRandomBook(){
    const allBooks = new BookLocationCodes().allBooks;
    let rendomBookCode = allBooks[Math.floor(Math.random() * allBooks.length)];
    allBooks.splice(allBooks.indexOf(rendomBookCode),1);
    return document.querySelector('.js-output-book-code').innerHTML =  rendomBookCode ? rendomBookCode : 'Complet';
  };

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
}

export class Score {
  constructor() {
    this.right = 0;
    this.wrong = 0; 
  }

  addRight() {
    this.right += 1;
  }

  addWrong() {
    this.wrong += 1;
  }

  resetScore() {
    this.right = 0;
    this.wrong= 0;
  }

  getCurrentScore() {
    return console.log(this);
  }

  displayHTML(){
    return document.querySelector('.js-output-book-code-resulet').innerHTML = `
    <p>Riktig: ${this.right}</p>
    <p>Feil: ${this.wrong}</p>
    `;
  }
}

export class ButtonColor {
  addColor(buttonId, answer) {
    if (answer){
      document.getElementById(buttonId).classList.add("bookButtonsRight");
    }else{
      document.getElementById(buttonId).classList.add("bookButtonsWrong");
    }
  }
  resetColor(buttonId) {
    document.getElementById(buttonId).classList.remove('bookButtonsWrong');document.getElementById(buttonId).classList.remove('bookButtonsRight');
  }
}


