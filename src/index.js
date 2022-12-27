const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const Database = require('better-sqlite3');
const savedCards = [];

const server = express();

server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

const db = new Database('./src/db/cards.db', { verbose: console.log });

//serverPort es igual al PORT (variable de entorno del sistema operativo) o si está vacío es igual a 4000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  //req.body esto es data en el servidor
  let success = true;
  const errorArray = [];
  for (const property in req.body) {
    if (req.body[property] === '') {
      success = false;
      errorArray.push(property);
    }
    console.log(req.body[property]);
  }

  if (success === true) {
    const newCard = {
      id: uuidv4(),
      ...req.body,
    };
    // savedCards.push(newCard);
    //Guardamos la tarjeta en la base de datos con un INSERT
    const insertStmt = db.prepare(
      'INSERT INTO card (palette,name,email,photo,phone,linkedin,github,job) VALUES (?,?,?,?,?,?,?,?)'
    );
    const result = insertStmt.run(
      req.body.palette,
      req.body.name,
      req.body.email,
      req.body.photo,
      req.body.phone,
      req.body.linkedin,
      req.body.github,
      req.body.job
    );
    const responseSuccess = {
      success: true,
      cardURL: `http://localhost:4000/card/${result.lastInsertRowid}`,
    };
    res.json(responseSuccess);
  } else {
    const responseFail = {
      success: false,
      error: `Error falta información ${errorArray.join()}`,
    };
    res.json(responseFail);
  }
});

server.get('/card/:id', (req, res) => {
  //guardamos el parámetro id de la url
  const id = req.params.id;
  //creamos la query
  const query = db.prepare('SELECT * FROM userCards WHERE id = ?');
  //ejecuto la query y me devuelve los datos de la tarjeta que correspondan con el id de la url
  const userCard = query.get(id);
  console.log(userCard);
  //pinto el template de tarjetas con mis datos personalizados (del id de la url)
  res.render('cardTemplate', userCard);
});
console.log('holis');

const staticServer = './src/public-react';
server.use(express.static(staticServer));

const staticServerCSS = './src/public-css';
server.use(express.static(staticServerCSS));
