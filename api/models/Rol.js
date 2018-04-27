/**
 * Roles.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'roles',
  attributes: {
    id:{
      type:'integer',
      primaryKey: true,
      autoincrement: true
    },
    tipo:{
      type: 'text',
      required: true 
    },
    usuarios:{ //hasMany
      collection:'usuario',
      via: 'rol_id'
    }
  }
};

