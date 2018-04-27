/**
 * Nivel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'escolaridades',  
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
    ejercicios:{ //hasMany
      collection:'ejercicio',
      via: 'escolaridad_id'
    }
  }
};

