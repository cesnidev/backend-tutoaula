module.exports.routes = {
  "/":{
    view:"homepage"
  },
  "POST /auth/login":"auth.login",
  'POST /auth/register':'auth.register',
  'GET /test':'auth.test',
  'GET /token':'test.test',
};
