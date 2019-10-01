const User = require('../models').User;
const ProjectService = require('../services').projectService;
const MailService = require('../services').mailingService;
module.exports = {
   create(req,res){
      return User
         .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailId: req.body.emailId,
            contactNumber: req.body.contactNumber,
            role: req.body.role,
         })
         .then(function(user){
            ProjectService.projectByCode('212031')
            //.then(obj => {
            //console.log(MailService.triggerMail('S&N'));
            res.status(201).send(user);
            console.log("message");})//})
         .catch(error => res.status(400).send(error))
   },
   retrieve(req,res){
      return User.findAll()
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
   }

};
