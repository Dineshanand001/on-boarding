const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var registerController = require('./controller/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/register',registerController.register);

app.listen(3030);
