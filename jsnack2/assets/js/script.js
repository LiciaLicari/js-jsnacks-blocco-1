console.log("Snack 2");

/*

Descrizione:

- Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

Consigli:
se state scrivendo lo stesso codice identico o molto simile, 
considerate la possibilitá che serva un loop
partite sempre con l'elenco degli strumenti
scrivete in italiano cosa volete che il programma faccia (pseudo codice)



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

const firstWord = prompt('Type a word');
const secondWord = prompt('Type another one');
console.log(firstWord);
console.log(secondWord);

// Create DOM elements

const bodyElement = document.querySelector("body");
const firstWordElement = document.createElement("div");
const secondWordElement = document.createElement("div");
const outcomeElement = document.createElement("div");

// and print on page

outcomeElement.setAttribute("id", "outcome");
bodyElement.append(outcomeElement);
outcomeElement.append(firstWordElement);
outcomeElement.append(secondWordElement);

firstWordElement.append("First word: " + firstWord);
secondWordElement.append("Second word: " + secondWord);

// if/else & print beginning from the shorter one

if (firstWord != "" && secondWord != "") 
{
if (firstWord.length <= secondWord.length) {
        console.log(firstWord, secondWord);
        outcomeElement.append(`From the shorter: ${firstWord} ${secondWord}`);
} else if (secondWord.length < firstWord.length) {
        console.log(secondWord, firstWord);
        outcomeElement.append(`From the shorter: ${secondWord} ${firstWord}`);
} else if (secondWord.length = firstWord.length) {
        console.log(firstWord, secondWord);
        outcomeElement.append(`The words you chose are even: ${firstWord} ${secondWord}`);
}
    
 else {
        console.log("Something went wrong");
        outcomeElement.append("Something went wrong");
}
}