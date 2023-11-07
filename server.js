// importo la libreria http necessaria per creare un server
// Libreria esiste già nativamente in Node
const http = require("http");

// importo la libreria dotenv
const dotenv = require("dotenv");

// la avvio
dotenv.config();
// creao la porta 
const port = process.env.PORT || 8000;

// Creo il server
// la callback function verrà invocata ogni volta che arriva una richiesta sulla porta specificata

const server = http.createServer(function(req,res){
    // Devo specificare come il server deve rispondere
    // Invio dati in formato HTML
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end('<h1>CIAO MONDO!</h1>');
});

// avvio il server
server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
  });