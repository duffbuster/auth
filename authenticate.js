var express = require('express');
var app = express();

var login = [{username: 'Colin', password: 'poo'}];

app.use(express.bodyParser());