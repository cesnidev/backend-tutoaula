/**
 * Tema.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'temas',
  attributes: {
    id:{
      type:'integer',
      primaryKey: true,
      autoincrement: true
    },
    titulo:{
      type:"text"
    },
    ejercicios:{
      collection:"ejercicio",
      via: "tema_id"
    },
    secciones:{
      collection:"seccion",
      via:"tema_id"
    }
  }
};

