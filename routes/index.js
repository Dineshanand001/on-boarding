const userController = require('../controllers').user;
module.exports = (app) => {
   app.post('/api/user',userController.create);
   app.get('/api/user',userController.retrieve);
}
