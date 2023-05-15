var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomSourceImage1 = "images/"+randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src",randomSourceImage1);

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomSourceImage2 = "images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomSourceImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
