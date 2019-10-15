const User = require('../models').User;
const MailService = require('../services').mailingService;
const LDAPService = require('../services').LDAPService;
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
            if(req.query.email){               
               console.log(MailService.triggerMail(req));
            }
            res.status(201).send(user);
         })
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
   },
   activateUser(req,res){
      console.log(req.params.emailId);
      
      return User.update(
         {isActive: true,LDAPEntry: false},
         {returning: true, where: {emailId: req.params.emailId,isActive:false} }
         )
         .then(function(user){
            if(user[1]==1){
               res.status(200).send("Test: "+user+"\nThanks for grating permission to "+req.params.emailId);
            } else{
               res.status(200).send("Test: "+user+"\n"+req.params.emailId+" already has permission");
            }
         })
         .catch(error => res.status(400).send(error))
   },
   fireNow(req,res){
      console.log("Firenow");
      
   }

};