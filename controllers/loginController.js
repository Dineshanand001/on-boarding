const nJwt = require('njwt');
const ldap = require('ldapjs');
const LDAPService = require('../services').ldapService;
const config = require(__dirname + '/../config/config.json');

const ldapClient = ldap.createClient({
    url: process.env.LDAP,
  });
module.exports = {
    login(req,res){
    console.log(req.query.cn);
    console.log(req.query.userPassword);
   
    ldapClient.bind('cn='+req.query.cn+',ou=Users,dc=example,dc=com', req.query.userPassword, function(err) {
      if(err) {
        return res.status(401).send({ auth: false, token: null });
      }
      var jwt = nJwt.create({ id: (req.query.cn)}, config.secret);
      jwt.setExpiration(new Date().getTime() + (24*60*60*1000));
      console.log(jwt);
  
      res.status(200).send({ auth: true, token: jwt.compact() });
    });
  },
  registerUser(req,res){
    console.log("register controller");
    LDAPService.addUser(req,res)
    // .then(user => res.status(200).send(user))
    // .catch(error => res.status(400).send(error))
 }
}