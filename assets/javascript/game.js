//defining variables//
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var userGuess = [];
var compGuess;
var guessRemaining = 10;
var wins = 0;
var loss = 0;

//pick random letter based on array legnth (26 letters)//
compGuess = letters[Math.floor(Math.random() * letters.length)];

//create computer Guess function and test in console log//
function Guess() {
    compGuess
    console.log(compGuess);
}

//Defining userGuess when letter is pressed
document.onkeyup = function (event) {
    var userGuess = event.keyPress;
    console.log(userGuess);
}
