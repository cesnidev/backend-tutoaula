/**
 * isAuthorized
 *
 * @description :: Policy to check if user is authorized with JSON web token
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, next) {
    var token;
    var original;
    if (req.headers && req.headers.authorization) {
        token = req.headers.authorization;
    } else if (req.param('token')) {
      token = req.param('token');
      original = token;
      delete req.query.token;
    } else if(req.isSocket){
      token = req.body.a+"."+req.body.b+"."+req.body.c;
      delete req.body.a;
      delete req.body.b;
      delete req.body.c;
    } else {
        API.send(res,401,{},[{error:'ERR_AUTH', msg:'No permitido!!!'}]);
    }
  
    jwToken.verify(token, function (erro, tk) {
      if (erro){
           API.send(res,401,{},[{error:'ERR_TOKEN', msg:'Token caducado!!!'}]);
      }
      req.token = token; // This is the decrypted token or the payload you provided
      req.headers.auth = tk;
      console.log("=== BODY JWT ===");
      console.log(req.body);
      console.log("=== BODY JWT ===");
      console.log("=== headers JWT ===");
      console.log(req.headers);
      console.log("=== headers JWT ===");
      next(); 
    });
  };