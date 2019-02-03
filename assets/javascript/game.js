//defining variables//
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lettersUsed = [];
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
//captures user input
document.onkeyup = function (event) {
    var playerGuess = event.key;

//Add 1 to win when user guesses correctly
if (playerGuess === compGuess) {
    wins ++;
    guessRemaining = 10;
    lettersUsed = []
}
//subtract 1 from guesses remaining
else {
    guessRemaining --;
}

//add 1 to losses and reset game when no more guesses left
if (guessRemaining == 0) {
    loss++;
    lettersUsed = []
    guessRemaining= 10;
    document.getElementById('lettersGuessed').innerHTML = lettersUsed;
}

//stops user from using same letter twice
// if (lettersUsed.indexOf(playerGuess) >= 0){
// }

//adds letters guessed to <p id=lettersGuessed
else {
    lettersUsed.push(playerGuess);
    document.getElementById('lettersGuessed').innerHTML = lettersUsed;
    console.log(lettersUsed);
}

//add values to html
    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('lossCount').innerHTML = loss;
    document.getElementById('guessCount').innerHTML = guessRemaining;
}
