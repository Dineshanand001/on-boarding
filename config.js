const mysql = require('mysql');

var connection = mysql.createConnection({
   host:'localhost',
   user:'saurabh',
   password:'password',
   database:'onboard'
});

connection.connect(function(err){
   if(err){
      console.log("Error while connecting to Database !!!");
   } else{
      console.log("Database connected ...");
   }
});

module.exports = connection;
