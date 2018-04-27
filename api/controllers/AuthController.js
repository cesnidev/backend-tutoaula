module.exports = {
    login: function(req, res){        
        if (req.body == undefined || req.body.username == undefined || req.body.username.length == 0 || req.body.password == undefined || req.body.password.length == 0) {    
            return API.send(res,401,{},[{error:"ERR_00",msg:"Incomplete information"}]);
        }else{
            // if(!Utils.validateEmail(req.body.email)){ 
            //         return API.send(res,401,{},[{msg:"ERR_01"}]);
            // }else{
                var usr = req.body.username;
                var password = req.body.password;
                console.log("los campos existen");  
                Usuario.findOneByUsername(usr).populate("rol_id").exec(function(err,user){ 
                    if(err){
                        console.log(err);
                        // return API.send(res,401,{},[{msg:err}]);
                        return API.send(res,401,{},[{error:"ERR_01",msg:"Error de consulta"}]);
                    }else{
                        if(user == undefined || user.length == 0){
                            // return API.send(res,401,{},[{msg:"ERR_02"}]);
                            return API.send(res,401,{},[{error:"ERR_02",msg:"Credenciales invalidas"}]);
                        }else{
                            Usuario.comparePassword(password, user, function (err, valid) {
                                if (err) {
                                    console.log(err);
                                    // return API.send(res,403,{},[{msg:"ERR_03"}]);
                                    return API.send(res,401,{},[{error:"ERR_03",msg:"Error de consulta"}]);
                                }

                                if (!valid) {
                                    // return API.send(res,403,{},[{msg:"ERR_04"}]);
                                    return API.send(res,401,{},[{error:"ERR_04",msg:"Credenciales invalidas"}]);
                                } else {
                                    return API.send(res,200,{
                                        user: user,
                                        token: jwToken.genLoginKey({id : user._id,email:user.email })
                                    },[]);
                                }
                            });
                        }
                    }
                    
                });
           // }
        } 
    },
    register: function (req, res) {  
      console.log("=============================================");
      console.log(req.body);
      console.log("=============================================");
    //   if(req.body.password == undefined){
        if (
            req.body == undefined || 
            req.body.username == undefined || 
            req.body.username.length == 0 || 
            req.body.password == undefined || 
            req.body.password.length == 0 || 
            req.body.email == undefined || 
            req.body.email.length == 0 || 
            req.body.rol_id == undefined
        ) {    
            return API.send(res,401,{},[{error:"ERR_00",msg:"Incomplete information"}]);
        }else{
            Usuario.create(req.body).exec(function (err, user) {
                if (err) {
                  console.log(err);
                  console.log(err.invalidAttributes);
                  if(err.invalidAttributes&&err.invalidAttributes.email){
                    if(err.invalidAttributes.email[0].message.indexOf("should be an email")>-1){
                    //   return API.send(res,401,{},[{msg:"ERR_97"}]);
                      return API.send(res,401,{},[{msg:"El email "+req.body.email+" es invalido"}]);
                    }else if(err.invalidAttributes.email[0].message.indexOf("already exists")>-1){
                    //   return API.send(res,401,{},[{msg:"ERR_95"}]);
                    return API.send(res,401,{},[{msg:"El email "+req.body.email+" ya existe"}]);
                }
                  }else if(err.invalidAttributes&&err.invalidAttributes.username){
                    if(err.invalidAttributes.username[0].message.indexOf("already exists")>-1){
                        // return API.send(res,401,{},[{msg:"ERR_999"}]);
                        return API.send(res,401,{},[{msg:"El usuario "+req.body.username+" ya existe"}]);
                      }
                  }else{
                    return API.send(res,401,{},[{msg:"ERR_94"}]);
                  }
                  
                }
                if (user) {
                  // NOTE: payload is { id: user.id}
                  var response = {
                    usuario: user,
                    token: jwToken.genLoginKey({id : user._id,email:user.email })
                };
                return API.send(res,200,response,[]);
                }
              });
        }
      
      
    },
    test:function(req,res){
        var data={};
        var errores = [];
        data = Usuario.findOneByUsername("cesni").populate("rol_id").exec(function(err,user){
            if(err){
                Utils.setError(err);
                errores.push(err);
            }else{
                data = user;
            }
            return API.send(res,200,data);
        });
    }
};