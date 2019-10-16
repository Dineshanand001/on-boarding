const nJwt = require('njwt');
const config = require(__dirname + '/../config/config.json');
const ldap = require('ldapjs');
const ldapClient = ldap.createClient({
    url: process.env.LDAP,
  });

function jwtAuth(options) {
    return function (req, res, next) {
  if (!req.headers.token) {
    return res.status(403).send({ auth: false, message: 'No token provided' });
  }

  nJwt.verify(req.headers.token, config.secret, function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Could not authenticate token' });
    }
    console.log(decoded.body.id);
    req.userId = decoded.body.id;
    next();
  });
}
} 
function ldapConnect(){
    ldapClient.bind('cn=dinesha@virtusa.com,ou=Users,dc=example,dc=com', 'Dink@123', function(err, res) {
        if(err){
        console.log(err);
        }
        console.log(res);
    });
}
function addUser(req){
    var entry = {
        cn: (req.body.emailId),
        sn: (req.body.lastName),
        userPassword: 'Welcome1@',
        objectclass: ['inetOrgPerson','organizationalPerson','person','top']
       
      };
      let emailId = (req.body.emailId).toLowerCase();
      client.add("cn= " + `${emailId}` + ", ou=Users,dc=example,dc=com", entry, function(err) {
        if(err){
          console.log(err);
        }
      });
}

module.exports = {jwtAuth,ldapConnect,addUser}