const userController = require('../controllers').user;
const projectController = require('../controllers').project;
module.exports = (app) => {
   app.post('/api/user',userController.create);
   app.get('/api/user',userController.retrieve);
   app.post('/api/project',projectController.create);
   app.get('/api/project',projectController.retrieve);
   app.get('/api/project/:projectCode',projectController.getByCode);
   //app.get('/api/email',)
}
