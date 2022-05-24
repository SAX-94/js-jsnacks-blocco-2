// @ts-nocheck
const nomi = ["Aldo", "Marco", "Mario", "Luca", "Fabio"];
const cognomi = ["Verdi", "Rossi", "Bianchi", "Brambilla", "Greco"];

let nomeIndex = 0;
let cognomeIndex = 0;
let nomeRandom = "";
let cognomeRandom = "";

for (let i = 0; i < nomi.length; i++) {
    nomeIndex = parseInt(Math.floor(Math.random() *  nomi.length));
    nomeRandom = nomi[nomeIndex];
    console.log(nomeRandom);
}