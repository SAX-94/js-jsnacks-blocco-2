/* L'utente inserisce un numero. Se è pari, lo stampo. Altrimenti,
stampo il successivo. */

let insNum = parseInt(prompt("Inserisci un numero"));

if (insNum % 2 == 0) {
    console.log(insNum)
} else {
    console.log(insNum + 1)
}