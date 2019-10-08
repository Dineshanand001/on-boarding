require('dotenv').config();

var express = require('express');
const bodyParser = require('body-parser');
var app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var models = require('./models');

models.sequelize.sync().then(function(){
   console.log("Database Synced ...");
}).catch(function(err){
   console.log(err,"Something wrong with Database !!!");
});

require('./routes')(app);
app.get('*',(req,res) => res.status(200).send({
   message: 'Welcome Test',
}));

app.listen(PORT);
module.exports = app;
