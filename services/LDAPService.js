const nJwt = require('njwt');
const config = require(__dirname + '/../config/config.json');

function jwtAuth(req, res, next) {
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

module.exports = jwtAuth;