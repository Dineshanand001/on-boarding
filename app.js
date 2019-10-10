require('dotenv').config();

var path = require('path');
var express = require('express');
const bodyParser = require('body-parser');

var app = express();
const methodOverride = require('method-override');

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride('_method'))

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,GET,POST,DELETE,PATCH,UPDATE");
   next();
 });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

//app.listen(PORT);
const server = app.listen(PORT, () => {
   console.log('Express listening at ', server.address().port);
})
module.exports = app;
