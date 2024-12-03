function rollDice(){

var diceImages= ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png","images/dice5.png","images/dice6.png"]

function getRandomNumber(){
    var randomNumber = Math.floor(Math.random() * 6);
    return diceImages[randomNumber]
}
var leftDice = document.getElementsByClassName('img1')[0];
var rightDice=document.getElementsByClassName('img2') [0];

var leftDiceresult = getRandomNumber();
var rightDiceresult = getRandomNumber();

leftDice.setAttribute('src', leftDiceresult);
rightDice.setAttribute('src',rightDiceresult );

resultText = document.querySelector('h1');

if (leftDiceresult> rightDiceresult){
    resultText.innerHTML = 'Player 1 Wins 🚩!'; 
}
else if (rightDiceresult > leftDiceresult){
    resultText.innerHTML = "Player 2 wins 🚩 !";
}
else{
    resultText.innerHTML = "Draw!"
}


}

rollDice();

