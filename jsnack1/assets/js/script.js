console.log("Snack 1");

/*

Descrizione:
- Snack 1:
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

Consigli:
- se state scrivendo lo stesso codice identico o molto simile, 
considerate la possibilitá che serva un loop
- partite sempre con l'elenco degli strumenti
- scrivete in italiano cosa volete che il programma faccia (pseudo codice)

*/

/* 

Tools:
- prompt
- const
- let
- .createElement
- .querySelector
- append
- if/else
- console.log
*/

// Define variables

const firstNumber = Number(prompt("Type a number ⃗"));
console.log(firstNumber);
const secondNumber =   Number(prompt("Type a new one ⃗"));
console.log(secondNumber);
// Create DOM elements

const bodyElement = document.querySelector("body");
const firstNumberElement = document.createElement("div");
const secondNumberElement = document.createElement("div");
const resultElement = document.createElement("div");

// if/else and print on page