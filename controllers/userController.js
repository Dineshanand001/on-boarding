const User = require('../models').User;
const ProjectService = require('../services').projectService;
const MailService = require('../services').mailingService;
module.exports = {
   create(req,res){
      return User
         .create({
            firstName: (req.body.firstName).toLowerCase(),
            lastName: (req.body.lastName).toLowerCase(),
            emailId: (req.body.emailId).toLowerCase(),
            contactNumber: req.body.contactNumber,
            role: (req.body.role).toLowerCase(),
         })
         .then(function(user){
            // ProjectService.projectByCode('212031')
            // .then(obj => {
            if(req.query.email){               
               console.log(MailService.triggerMail(req.query));
            }
            res.status(201).send(user);
            console.log("message");})//})
         .catch(error => res.status(400).send(error))
   },
   retrieve(req,res){
      return User.findAll()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
   },
   getByRole(req,res){
      var attributes = null;
      if (req.query.columns){
         attributes = (req.query.columns).split(",");
      }
      return User.findAll({
         where: {
           role:req.params.role,
         },
         attributes:attributes,
   })
   .then(user => res.status(200).send(user))
   .catch(error => res.status(400).send(error))
}
};
