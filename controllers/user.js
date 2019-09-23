const User = require('../models').User;
module.exports = {
   create(req,res){
      return User
         .create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email_id: req.body.email_id,
            contact_number: req.body.email_id,
         })
         .then(user => res.status(201).send(user))
         .catch(error => res.status(400).send(error))
   },
   retrieve(req,res){
      return User.findAll()
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
   }
};
