/**
 * Respuestas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'respuestas',
  attributes: {
    id:{
      type:'integer',
      primaryKey: true,
      autoincrement: true
    },
    descripcion:{
      type: 'text'
    },
    imagen:{
      type: 'text',
      defaultsTo:'noimage.png'
    },
    ejercicio_id:{
      model:'Ejercicio'
    }
  }
};

