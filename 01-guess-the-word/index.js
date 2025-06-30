const prompt = require('prompt-sync')();

// Guess the Word - Comouter will pick a random sentence and the user will have to key in an alphabet
// to see if the alphabet is in the sentence

// Three types of variables in JavaScript
// var, let and const
// - do not use var
// - let is used when the variable will be reassigned a different value
// - const is used wehn the variable's value will remain the same for the duration of its scope
const secretWord = "apple";

// JavaScript has all the operators common in other programming languages
// +, -, /, * -> arth. operators
// >, <, >=, <=, == => comparsion operators
// ||, && -> logical operators
// if, if/else and else works the same way as all other programming languages

// Uniquely JavaScript -> truthy and falsly values
// Truthy values -> are not falsly, [], {}, " ", "0"
// Falsly values -> false, "", '', 0, 0.0, null, undefined, NaN

const guesses = [];

while (true) {
    let alphabet = "";
    while (alphabet === "" || alphabet.toLowerCase().charCodeAt(0) < 97 || alphabet.toLowerCase().charCodeAt(0) > 122) {
        alphabet = prompt("Enter an alphabet: ");
        if (alphabet === "" || alphabet.toLowerCase().charCodeAt(0) < 97 || alphabet.toLowerCase().charCodeAt(0) > 122) {
            console.log("You did not enter a valid character");
            break;
        }
    }

    if (alphabet == "!q") {
        break;
    }
    if (secretWord.includes(alphabet)) {
        console.log("Alphabet", alphabet, "is in the secret word");
        guesses.push(alphabet);
    } else {
        console.log("Alphabet", alphabet, "is not in the secret word");
    }

    // print out the secret word, using _ for alphabets not guessed yet and for alphabet thats has been guessed,
    // we display it
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

    if (display.join("") == secretWord) {
        console.log("You have guessed the word correctly!");
        break;
    }
}
