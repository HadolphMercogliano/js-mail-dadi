// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genera un numero randomico da 1 a 6(PC)
// immagazzina il valore in una variabile

// genera il secondo numero randomico da 1 a 6 (USER)
// immagazzina il valore in una variabile

// confronta i numeri ottenuti
// se il numero del PC è più alto stampa un messaggio
// se il numero dell' USER è piùù alto stampa un altro messaggio
// se i numeri sono uguali stampa un altro messaggio
const lanciaIDadi = document.getElementById("lanciaIDadi");
console.log(lanciaIDadi);
lanciaIDadi.addEventListener(
    'click',
    function () {

        let dadoPC = Math.floor(Math.random() * 6) + 1;
        // console.log(dadoPC);
        let dadoUSER = Math.floor(Math.random() * 6) + 1;
        // console.log(dadoUSER);

        if (dadoPC > dadoUSER) {

            document.getElementById("vincitore").innerHTML = `Il PC ha vinto con ${dadoPC} contro ${dadoUSER}`

        } else if (dadoPC < dadoUSER) {

            document.getElementById("vincitore").innerHTML = `Hai vinto con ${dadoUSER} contro ${dadoPC}`

        } else {

            document.getElementById("vincitore").innerHTML = `Avete pareggiato con ${dadoPC}`
        }
    }
)