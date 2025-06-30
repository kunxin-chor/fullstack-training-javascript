const prompt = require('prompt-sync')();

// Guess the Word - Comouter will pick a random sentence and the user will have to key in an alphabet
// to see if the alphabet is in the sentence

// Three types of variables in JavaScript
// var, let and const
// - do not use var
// - let is used when the variable will be reassigned a different value
// - const is used wehn the variable's value will remain the same for the duration of its scope
const secretWord = "apple pie";




// JavaScript has all the operators common in other programming languages
// +, -, /, * -> arth. operators
// >, <, >=, <=, == => comparsion operators
// ||, && -> logical operators
// if, if/else and else works the same way as all other programming languages

// Uniquely JavaScript -> truthy and falsly values
// Truthy values -> are not falsly, [], {}, " ", "0"
// Falsly values -> false, "", '', 0, 0.0, null, undefined, NaN


let alphabet = prompt("Enter an alphabet: ");
if (alphabet) {
    console.log("alphabet =", alphabet);
    // determine if the alphabet is in the sentence
    const matched = secretWord.includes(alphabet);
    if (matched) {
        console.log("Alphabet", alphabet, "exists in the word");
    } else {
        console.log("Alphabet does not exist in the word")
    }

} else {
    console.log("You did not enter anything")
}