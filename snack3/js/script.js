// @ts-nocheck
/* Lo script deve sommare tutti gli elementi che sono in 
posizione dispari (hanno array index dispari).*/


const elenco = [2, 4, 6, 8, 10, 12, 14, 16];

let somma = 0;

for (let i = 0; i < elenco.length; i++) {
    if (i % 2 == 1) {
        somma += elenco[i]
    }
    console.log(somma)
}