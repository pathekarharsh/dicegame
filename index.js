var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //for d/f image

var randomImageSource = "images/" + randomDiceImage;  //images form 1-6 png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";  //images form 1-6 png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW 😐 Try again!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins! ✌️";
}

else {
  document.querySelector("h1").innerHTML = "✌️ Player1 Wins!";
}
