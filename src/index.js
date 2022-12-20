
const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json({limit: '25mb'}));


const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
    //req.body
    // respuesta si todo va bien
    const responseSuccess = {
      success: true,
      cardURL: "https://dev.adalab.es/cards"
    };
    res.json(responseSuccess);
    // respuesta si todo va mal
    const responseFail = {
        success : false,
        error: "Error falta informacion"
    };
    res.json(responseFail);

    
  });  


server.get('/card', (req, res) => {
  const response = {
    error: "aun no tengo informacion"
     };
  res.json(response);
});
console.log("holis");
