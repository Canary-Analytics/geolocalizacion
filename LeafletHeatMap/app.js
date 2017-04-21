"use strict";

var express = require('express');
var app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
var app = express();

app.set('port', process.env.PORT || 3000);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});