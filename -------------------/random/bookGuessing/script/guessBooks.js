import {books,getBook,} from './getBooks.js'

document.querySelector('.jsSidePracticePage').addEventListener('click', () => {renderPage()});

let randomBook;
const {leftBooks, rightBooks} = books;

function guessBook(side){
  !randomBook && alert('Pless get a code before guessing a side'); 
  document.querySelector(".answer").innerHTML = "Feil";
  side === 'left' && leftBooks.forEach((item) => {
   randomBook === item && (document.querySelector(".answer").innerHTML = "Riktig"); 
  });
  side === 'right' && rightBooks.forEach((item) => {
    randomBook === item && (document.querySelector(".answer").innerHTML = "Riktig");
  });
}

function renderPage(){
  
  let html = `
    <section class="sideDrilling">
      <div class="bookBoxTop">
        <p class="bookNumber">Bokkode</p>
      </div>
      <div class="bookBoxMiddle">
        <p class="answer">Resultat</p>
      </div>
      <div class="bookBoxBottom">
        <button class="leftB jsLeftButton">Venstre</button>
        <button class="getBook jsGetBook">Ny Kode</button>
        <button class="rightB jsRightButton">Høyere</button>
      </div>
    </section>
  `;
  document.querySelector('.mainTest').innerHTML = html;

  document.querySelector('.jsGetBook').addEventListener("click", () => {
    document.querySelector(".answer").innerHTML = "Resultat"; 
    randomBook = getBook();
  });
  document.querySelector('.jsRightButton').addEventListener("click", () => {guessBook('right')});
  document.querySelector('.jsLeftButton').addEventListener("click", () => {guessBook('left')});
}