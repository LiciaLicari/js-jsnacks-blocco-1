console.log("Snack 3");

/*

Descrizione:

- Snack 3:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
- Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

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
- for
- console.log
*/

/* Defining variables and DOM elements*/

const bodyElement = document.querySelector('body');
const resultElement = document.createElement('div');
let sum = 0;

for (let i = 0; i < 10; i++) {
    const input = Number(prompt(`Insert number ${i+1}`));
    sum += input;
}

console.log(sum);

// print 
bodyElement.append(resultElement);

if (!isNaN(sum)) {
    resultElement.append("Resulting sum is: " + sum);
} else {
    resultElement.append("Something went wrong");
}
