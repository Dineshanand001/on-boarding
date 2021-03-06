const userController = require('../controllers').user;
const projectController = require('../controllers').project;
const loginController = require('../controllers').login;
const ldapService = require('../services').ldapService;

module.exports = (app) => {
   app.get('/login',loginController.login);
   app.post('/registerUser',loginController.registerUser);
   app.post('/api/user',userController.create);
   app.get('/api/user',userController.retrieve);
   app.get('/api/user/:role',userController.getByRole);
   app.get('/api/user/activate/:emailId',userController.activateUser);
   app.post('/api/project',projectController.create);
   app.get('/api/project',projectController.retrieve);
   app.get('/api/project/:projectCode',projectController.getByCode);
   app.get('/hi',ldapService.jwtAuth(), function(req, res) {
      res.send({body: 'Hello World'});
     });
   
}
