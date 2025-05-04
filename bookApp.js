document.getElementById('mainTest').style.visibility = 'hidden';

function sidePro(){
  if (document.getElementById('mainTest').style.visibility === 'hidden'){
    document.getElementById('mainTest').style.visibility = 'visible';
  }  
}
let arr = [
  2052100,2052000,2051900,2051600,2051500,2051400,2051300,2051700,2051100,2051200,
  2053800,2054100,2054000,2054200,2054300,2054500,2054400,
  2042700,2042600,2042500,2042300,2040200,2040281,2042000,2041900,2041800,2041700,2042701,
  2042900,1043001,2043000,2043200,2043400,2042800,
  2043800,2043700,2043600,2044100,2043900,1042901,
  2053600,2053400,2052900,2052800,
  2041500,2052200,1050101,2050100,1050201,2050200,2041215,2041200,1040303,2040300,2040311
];
function getBook() { // finner og printer ut number


  while (arr.length > 0){
    function get_random (list) {
      return list[Math.floor((Math.random()*list.length))];
    }
    let ran = get_random(arr);

    document.getElementById("answer").innerHTML = "Resultat"; //Resetter svar box
    document.getElementById("bookNumber").innerHTML = ran;
    const index = arr.indexOf(ran); //finner et element
    const x = arr.splice(index, 1); // fjerner et element
    document.getElementById("getBook").innerHTML = "Få Bok";
    
    if (arr.length === 0){ // kanskje jeg kan sette den et andet sted?
      document.getElementById("bookNumber").innerHTML = "Completed";
    }
    break;
  }
}
function rightAnswer(){
  const arrRight = [
    2042900,1043001,2043000,2043200,2043400,2042800,
    2043800,2043700,2043600,2044100,2043900,1042901,
    2053600,2053400,2052900,2052800,
    2041500,2052200,1050101,2050100,1050201,2050200,2041215,2041200,1040303,2040300,2040311
  ];
  let get_num = document.getElementById("bookNumber").innerHTML;

  if (get_num !== "Completed" && get_num !== "Bok Kode"){
    let te = Number(get_num);// rename
    let t = arrRight.indexOf(te);// rename
    if (t >= 0){
      document.getElementById("answer").innerHTML = "Riktig"; 
    }else{
      document.getElementById("answer").innerHTML = "Feil"; 
    }
  }
}
function leftAnswer(){
  const arrLeft = [
    2052100,2052000,2051900,2051600,2051500,2051400,2051300,2051700,2051100,2051200,
    2053800,2054100,2054000,2054200,2054300,2054500,2054400,
    2042700,2042600,2042500,2042300,2040200,2040281,2042000,2041900,2041800,2041700,2042701
  ];
  let get_num = document.getElementById("bookNumber").innerHTML;
  if (get_num !== "Completed" && get_num !== "Bok Kode"){
    let te = Number(get_num);// rename
    let t = arrLeft.indexOf(te);// rename
    if (t >= 0){
      document.getElementById("answer").innerHTML = "Riktig";
    }else{
      document.getElementById("answer").innerHTML = "Feil"; 
    }
  }
}