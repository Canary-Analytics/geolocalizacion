"use strict";

const express = require('express');
const app = express();
const path = require('path');

const coords = require('./utils');
const datos =  require("./utils/data/tweets.json");

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/datos', function(req, res) {
    let coordenadas = coords.calculate(datos);
    res.json(coordenadas);
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
