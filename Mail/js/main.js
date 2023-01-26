// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

const ProcediButtonEl = document.getElementById('procedi')
console.log(ProcediButtonEl);
ProcediButtonEl.addEventListener(
    'click',
    function () {

        const userMailEl = document.getElementById("userMail");
        let userMail = userMailEl.value;
        console.log(userMail);

        const mailList = [
            "giovanni.mercogliano@gmail.com",
            "nora83@yahoo.it",
            "qlangworth@yahoo.it",
            "goyette.cyril@gmail.com",
            "abc@gmail.com",
            "gerardo91@yahoo.it",
            "obecker@hotmail.comyahoo.it",
            "una98@yahoo.it",
            "asd1@gmail.com",
            "alberto61@gmail.com",
            "liliana89@gmail.com"
        ]
        // console.log(mailList.length);

        let dirittoDiAccesso = false;
        // controlla che la mail inserita dall' utente sia nella lista
        for (i = 0; i < 11; i++) {
            if (mailList[i] == userMail) {
                dirittoDiAccesso = true;


            }
        }
        if (dirittoDiAccesso) {
            document.getElementById('result').innerHTML = ('<img src="./img/welcome-gif-33.gif" alt="Welcome">')
        } else {
            document.getElementById('result').innerHTML = ('<img src="./img/you-shall-not-pass.gif" alt="Autorizzazione negata">');


        }
    }
)