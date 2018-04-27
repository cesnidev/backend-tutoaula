module.exports = {
    test: function(req,res){
        var data = {
            usernaname: "cesni",
            password: "alguno"
        };
        res.json(200,{
            AUTH: req.headers
        });
    }
};