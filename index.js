const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var userController = require('./controller/user-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/register',userController.register);
app.get('/api/getByUserRole',userController.getByUserRole);

app.listen(3030);
