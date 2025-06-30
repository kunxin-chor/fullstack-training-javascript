const prompt = require('prompt-sync')();

function pickSecretWord() {
    return "apples";
}

function getAlphabetFromUser() {
    let alphabet = "";
     while (alphabet === "" || alphabet.toLowerCase().charCodeAt(0) < 97 || alphabet.toLowerCase().charCodeAt(0) > 122) {
        alphabet = prompt("Enter an alphabet: ");
        if (alphabet === "" || alphabet.toLowerCase().charCodeAt(0) < 97 || alphabet.toLowerCase().charCodeAt(0) > 122) {
            console.log("You did not enter a valid character");
            break;
        }
    }
    return alphabet;
}

function determineCorrectAlphabet(secretWord, alphabet) {
    if (secretWord.includes(alphabet)) {
        return true;
    } else {
        return false;
    }
}

function displayWord(guesses, secretWord) {
    const display = [];
    for (let alphabet of secretWord) {
        if (alphabet == ' ') {
            display.push(' ');
        }
        else if (guesses.includes(alphabet)) {
            display.push(alphabet);
        } else {
            display.push('_');
        }

    }
    console.log(...display)
}

function checkAnswer(guesses, secretWord) {
    for (let s of secretWord) {
        if (!guesses.includes(s)) {
            return false;
        }
    }
    return true;
}

// Good practice to have a function named main as the starting
// point and then put all your code in it
// function main() {

// } 
// main(); // run the main function when we execute index.js

// Immediate Invoked Function Expression
(function() {
  const secretWord = pickSecretWord();
  const guesses = [];

  while(true) {
    let alphabet = getAlphabetFromUser();
   
    if (alphabet == "!q") {
        break;
    }
   
    const guessCorrect = determineCorrectAlphabet(secretWord, alphabet);
   
    if (guessCorrect) {
        guesses.push(alphabet);
        console.log("Alphabet", alphabet, "is in the secret word");
    } else {
        console.log("Alphabet", alphabet, "is not in the secret word");
    }

    displayWord(guesses, secretWord);

    if (checkAnswer(guesses, secretWord)){
        console.log("Congrats you have guessed the word!");
        break;
    } 
}

})();