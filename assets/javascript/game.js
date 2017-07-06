var possibleChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//initiate all variables
var wins = 0;
var losses = 0;
var guesses = 9;
var remainingGuesses = 9;
var guessesMade = [];
var lettersToGuess = null;

//Computer randomly selects from the array of choices
var computerGuess = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];


var updateremainingGuesses = function() {
  // Show the guesses left 
  document.getElementById('guessLeft').innerHTML = "Guesses left: " + remainingGuesses;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.possibleChoices[Math.floor(Math.random() * this.possibleChoices.length)];
};

var updateGuessesProgress = function() {
  document.getElementById('progress').innerHTML = "Your Guesses so far: " + guessesMade.join(', ');
};

// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  remainingGuesses = 9;
  guessesMade = [];

  updateLetterToGuess();
  updateremainingGuesses();
  updateGuessesProgress();
}

updateLetterToGuess();
updateremainingGuesses();

//once the key is presses and released the co putation of guesses,wins and losses is made
document.onkeyup = function(event) {
	//check if a number was pressed
  if(event.keyCode>=48 && event.keyCode<=57 || event.keyCode>=96 && event.keyCode<=105){
	  alert("You pressed a number, Please press letters only");
  }else{
	  remainingGuesses--;
	  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//add the letter to the array of guessed letters
	  guessesMade.push(userGuess);
	  updateremainingGuesses();
	  updateGuessesProgress();

		if(remainingGuesses > 0) {
		  if (userGuess === letterToGuess) {
			wins++;
			document.getElementById('wins').innerHTML = "Wins: " + wins;
			reset();
		  }
		} else if(remainingGuesses === 0) {

		  //add to the losses
		  losses++;
		  document.getElementById('losses').innerHTML = "Losses: " + losses;

		  //reset the values by calling the rese function
		  reset();
		}
  }
};
