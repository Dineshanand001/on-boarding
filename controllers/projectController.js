const Project = require('../models').Project;
module.exports = {
   create(req,res){
      return Project
         .create({
            name: req.body.name,
            code: req.body.code,
            clientName: req.body.clientName,
            clientLocation: req.body.clientLocation,
         })
         .then(project => res.status(201).send(project))
         .catch(error => res.status(400).send(error))
   },
   getByCode(req,res){
      console.log("Headers"+req.params.projectCode);
   return Project.findOne({
      where: {
        code:req.params.projectCode,
      },
   })
   .then(project => res.status(200).send(project))
   .catch(error => console.log("Error"))
   },
   retrieve(req,res){
      return Project.findAll()
      .then(project => res.status(200).send(project))
      .catch(error => res.status(400).send(error))
   }
};
