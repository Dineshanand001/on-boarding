require('dotenv').config();

var path = require('path');
var express = require('express');
const bearerToken = require('express-bearer-token');
const bodyParser = require('body-parser');
const fireNow = require('./controllers/userController').fireNow;
const ldapService = require('./services').ldapService;
var models = require('./models');
const cron = require('cron')
var app = express();
const router = express.Router();
const PORT = process.env.PORT;

app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(ldapService());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,GET,POST,DELETE,PATCH,UPDATE");
   next();
 });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

models.sequelize.sync().then(function(){
   console.log("Database Synced ...");
}).catch(function(err){
   console.log(err,"Something wrong with Database !!!");
});

require('./routes')(app);
//setInterval(fireNow,1000000)
cron.job('0 */5 * * * *', fireNow).start();
app.get('*',(req,res) => res.status(200).send({
   message: 'Welcome Test',
}));

//app.listen(PORT);
const server = app.listen(PORT, () => {
   console.log('Express listening at ', server.address().port);
})
module.exports = app;
