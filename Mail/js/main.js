// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.


let userMail = document.getElementById("userMail").innerHTML;
console.log(userMail);

const mailList = ["nora83@yahoo.it",
    "qlangworth @yahoo.it",
    "goyette.cyril@gmail.com",
    "abc@gmail.com",
    "gerardo91@yahoo.it",
    "obecker @hotmail.comyahoo.it",
    "una98@yahoo.it",
    "ibayer @gmail.com",
    "alberto61@gmail.com",
    "liliana89@gmail.com"]
// console.log(mailList.length);

let dirittoDiAccesso = false;
// controlla che la mail inserita dall' utente sia nella lista
for (i = 0; i < 10; i++) {
    if (mailList[i] == userMail) {
        dirittoDiAccesso = true;
    }
}
if (dirittoDiAccesso) {
    alert("benvenuto " + userMail)
} else {
    // alert("YOU SHALL NOT PASS")
}