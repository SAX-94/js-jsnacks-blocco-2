// @ts-nocheck
const nomi = ["Aldo", "Marco", "Mario", "Luca", "Fabio"];
const cognomi = ["Verdi", "Rossi", "Bianchi", "Brambilla", "Greco"];

/* Assegno un indice uguale a 0 a nomi e cognomi prima 
di far partire il ciclo. Prima della partenza del ciclo, 
nomeRandom e cognomeRandom sono stringhe vuote. */

let nomeIndex = 0;
let cognomeIndex = 0;
let nomeRandom = "";
let cognomeRandom = "";

for (let i = 0; i <= nomi.length; i++) {
    nomeIndex = parseInt(Math.floor(Math.random() * nomi.length));
    nomeRandom = nomi[nomeIndex];
    console.log(nomeRandom);
}

for (let i = 0; i <= cognomi.length; i++) {
    cognomeIndex = parseInt(Math.floor(Math.random() * cognomi.length));
    cognomeRandom = cognomi[cognomeIndex];
    console.log(cognomeRandom);
}

// STAMPO LA SOMMA DI NOMI E COGNOMI RANDOM

