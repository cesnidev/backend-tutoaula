/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */
 
var
  jwt = require('jsonwebtoken'),
  tokenSecret = "esternocleidomastoideotutoauladesoxirribonucleico";
// Generates a token from supplied payload
module.exports.issue = function(payload) { //expires in 24 hours
    console.log("generando token de acceso!!!");
  return jwt.sign(
    payload,
    tokenSecret, // Token Secret that we sign it with
    {
      expiresIn : 60*60*24// Token Expire time
    }
  );
};
module.exports.genLoginKey = function(payload) {
    console.log("generando token de acceso!!!");
    console.log(payload);
    console.log("generando token de acceso!!!");
  return jwt.sign(
    payload,
    tokenSecret, // Token Secret that we sign it with
    {
      expiresIn : 60*60*24*31*3// 3 month expiration
    }
  );
};

// Verifies token on a request
module.exports.verify = function(token, callback) {
  return jwt.verify(
    token, // The token to be verified
    tokenSecret, // Same token we used to sign
    {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    callback //Pass errors or decoded token to callback
  );
};
