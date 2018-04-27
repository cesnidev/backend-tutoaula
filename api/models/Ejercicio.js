/**
 * Ejercicio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'ejercicios',
  attributes: {
    id:{
      type:'integer',
      primaryKey: true,
      autoincrement: true
    },
    pregunta:{
      type: 'text',
      required: true
    },
    respuesta:{
      type: 'text',
      required: true
    },
    imagen:{
      type:"text"
    },
    grado:{ //1,2,3,4,5,6
      type: 'integer',
      defaultsTo: 1 
    },
    escolaridad_id:{ // //primaria,secundaria  belongsTo
      model:'escolaridad',
      unique: true
    },
    idioma_id:{ // espa;ol, nahuatl belongsTo
      model:'idioma',
      unique: true
    },
    tema_id:{
      model: 'tema'
    },
    seccion_id:{
      model: 'seccion'
    },
    respuestas:{
      collection: 'respuesta',
      via: 'ejercicio_id'
    }
  }
};

