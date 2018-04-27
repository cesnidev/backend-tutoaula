/**
 * Seccion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'secciones',
  attributes: {
    id:{
      type:'integer',
      primaryKey: true,
      autoincrement: true
    },
    titulo:{
      type:"text"
    },
    tema_id:{
      model: "tema"
    },
    ejercicios:{
      collection:"ejercicio",
      via: "seccion_id"
    }
  }
};

