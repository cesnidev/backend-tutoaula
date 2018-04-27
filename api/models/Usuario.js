/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/*
  rol_id:{ //belongsTo
      model: 'roles'
  }
  roles:{ //hasMany
      collection: 'users',
      via: 'rol_id'
    }
    ,
    tableName: 'custom_book_table'
*/

var bcrypt = require('bcrypt');
module.exports = {
  tableName: 'usuarios',
  attributes: {
    id:{
      type:'integer',
      primaryKey: true,
      autoincrement: true
    },
    username:{
      type: 'string',
      unique: true,
      required: true 
    },
    password:{
      type: 'text',
      required: true
    },
    email:{
      type: 'string',
      unique: true,
      required: true
    },
    rol_id:{
      model: 'rol',
      required: true
    },
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
   
     validation_messages: {
       name: {
   	     required: 'you have to specify a name or else'
       }
     },
  beforeCreate : function (values, next) {
    console.log(values);
    bcrypt.genSalt(10, function (err, salt) {
      if(err){
        console.log("surgio un error al generar bcrypt");
        return next(err);
      } 
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err){
          return next(err);
        } 
        console.log(hash);
        values.password = hash;
        next();

      });
    })
  },
  comparePassword : function (password, user, cb) {
    bcrypt.compare(password, user.password, function (err, match) {
      console.log(user);
      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};

