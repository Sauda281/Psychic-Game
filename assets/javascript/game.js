var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var computerGuess;


var newLetter = function() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
};

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(' ');
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var restart = function() {
	guessedLetters = [];
    left = 9;
    guessesSoFar = []
    newLetter();
    guessesLeft();
    soFar();
}

document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (userGuess === computerGuess) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            restart();
        }
    } else if (left === 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        restart();

    }
};
