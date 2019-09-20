const connection = require('./../config');

module.exports.register = function(req,res){
var users = {
   "first_name": req.body.first_name,
   "last_name": req.body.last_name,
   "email_id": req.body.email_id,
   "contact_number": req.body.contact_number,
   "role": req.body.role
}

connection.query('INSERT INTO user SET ?',users,function(error,results,fields){
   if (error){
      res.json({
         status: false,
         message: 'There is some error in query !!!'
      })
   } else {
      res.json({
         status: true,
         data: results,
         message: 'User registration request is generated ...'
      })
   }
});

}
