
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const savedCards = [];


const server = express();

server.use(cors());
server.use(express.json({limit: '25mb'}));


const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
    //req.body esto es data en el servidor
let success = true;
const errorArray = [];
for (const property in req.body) { 
  if (req.body[property] === "" ){
    success = false
   errorArray.push(property)}
    console.log(req.body[property]);
};

  if( success === true){
    const newCard = {
      id: uuidv4(),
      ...req.body
    }
    savedCards.push(newCard);
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${newCard.id}`
    };
    res.json(responseSuccess);  
  }
  
  else {
    const responseFail = {
      success : false,
      error: `Error falta información ${errorArray.join()}`
  };
  res.json(responseFail);  
  }     
  });  



server.get('/card', (req, res) => {
  const response = {
    error: "aun no tengo informacion"
     };
  res.json(response);
});
console.log("holis");

const staticServer = './src/public-react';
server.use(express.static(staticServer));