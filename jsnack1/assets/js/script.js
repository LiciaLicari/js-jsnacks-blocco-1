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

/*

const firstNumber = Number(prompt("Type a number"));
const secondNumber =   Number(prompt("Type a new one"));
console.log(firstNumber);
console.log(secondNumber);
// Create DOM elements

const bodyElement = document.querySelector("body");
const firstNumberElement = document.createElement("div");
const secondNumberElement = document.createElement("div");
const resultElement = document.createElement("div");

// and print on page

resultElement.setAttribute("id", "result");
bodyElement.append(resultElement);
resultElement.append(firstNumberElement);
resultElement.append(secondNumberElement);

firstNumberElement.append("First number: " + firstNumber);
secondNumberElement.append("Second number: " + secondNumber);


// if/else & print

if (firstNumber > secondNumber) {
        console.log(firstNumber + " is the bigger one");
        resultElement.append(firstNumber + " is the bigger one");
} else if (firstNumber < secondNumber) {
        console.log(secondNumber + " is the bigger one");
        resultElement.append(secondNumber + " is the bigger one");
} else if (firstNumber === secondNumber) {
        console.log(secondNumber + "=" + firstNumber + " Numbers are even");
        resultElement.append(secondNumber + "=" + firstNumber + " Numbers are even");
} else {
        console.log("Something went wrong");
        resultElement.append("Something went wrong");
}
*/


//WHILE con Fabio

// Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

let i = 0;

const userNumbers = [];

while ( i < 2) {
    const element = [i];
    //console.log(element);
    const userNumber = Number(prompt('Insert a number of your choice'));
    //console.log(userNumber);
    userNumbers.push = (userNumber);

    i++
}

