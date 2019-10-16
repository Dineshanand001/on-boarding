const nJwt = require('njwt');
const ldap = require('ldapjs');
const LDAPService = require('../services').LDAPService;
const config = require(__dirname + '/../config/config.json');

const ldapClient = ldap.createClient({
    url: process.env.LDAP,
  });
module.exports = {
    login(req,res){
   
    ldapClient.bind('cn='+req.body.userName+',ou=Users,dc=example,dc=com', req.body.password, function(err) {
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
    return LDAPService.addUser(req)
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error))
 }
}