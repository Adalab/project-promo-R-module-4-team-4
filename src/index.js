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
    const insertStmt = db.prepare(
      'INSERT INTO userCards (palette,name,email,photo,phone,linkedin,github,job,salary,openToWork,additionalInfo) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
    );
    const result = insertStmt.run(
      req.body.palette,
      req.body.name,
      req.body.email,
      req.body.photo,
      req.body.phone,
      req.body.linkedin,
      req.body.github,
      req.body.job,
      req.body.salary,
      req.body.openToWork,
      req.body.additionalInfo
    );
    const responseSuccess = {
      success: true,
      //cambiamos la url de localhost a Railway y le ponemos el ID que devuelve el INSERT
      cardURL: `https://project-promo-r-module-4-team-4-production.up.railway.app/card/${result.lastInsertRowid}`,
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
  const salaryText = () => {
    if (userCard.salary === '1') {
      return '30.000-40.000';
    } else if (userCard.salary === '2') {
      return '40.000-50.000';
    } else {
      return '>=50.000';
    }
  };
  const userCardFinal = {
    palette: userCard.palette,
    name: userCard.name,
    job: userCard.job,
    phone: userCard.phone,
    email: userCard.email,
    linkedin: userCard.linkedin,
    github: userCard.github,
    photo: userCard.photo,
    salary: salaryText(),
    openToWork: userCard.openToWork,
    additionalInfo: userCard.additionalInfo,
  };
  //pinto el template de tarjetas con mis datos personalizados (del id de la url)
  res.render('cardTemplate', userCardFinal);
});
console.log('holis');

const staticServer = './src/public-react';
server.use(express.static(staticServer));

const staticServerCSS = './src/public-css';
server.use(express.static(staticServerCSS));
