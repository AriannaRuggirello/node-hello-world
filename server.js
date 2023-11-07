// importo la libreria http necessaria per creare un server
// Libreria esiste già nativamente in Node
const http = require("http");

// importo la libreria dotenv
const dotenv = require("dotenv");

// la avvio
dotenv.config();

// creo la porta 
const port = process.env.PORT || 8000;

// Creo il server
// la callback function verrà invocata ogni volta che arriva una richiesta sulla porta specificata

const server = http.createServer(function(req,res){
    // Devo specificare come il server deve rispondere
    // Invio dati in formato HTML
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // creo un array vuoto
    let phraseAlreadyUsed=[];
    // creo un array di frasi
    let phrases =[
        "L'azione è la chiave fondamentale di ogni successo.",
        "Sii il cambiamento che vuoi vedere nel mondo.",
        "Non importa quanto tu vada piano, purché non ti fermi." ,
        "Ogni giorno è una nuova opportunità. Prendila. Respira e inizia di nuovo." 
    ]
   // Genero un indice per selezionare una frase casuale dall'array
    // Math.random() è una funzione che restituisce un numero casuale compreso tra 0 (incluso) e 1 (escluso), 
    let i = Math.floor(Math.random() * phrases.length);

    //frase dall'array uguale all'indice 
    let phrase = phrases[i];
    // stampo la frase
    // console.log(`il tuo indirizzo IP è ${process.env.IPADDRESS}`);
    res.end(`<h1>La frase del giorno è: <br> ${phrase}</h1>
   <span> il tuo indirizzo IP è ${process.env.IPADDRESS}</span>`);
});

// avvio il server
server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
  });