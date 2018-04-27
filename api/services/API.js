module.exports.send = function(res,status,d,e){
    console.log("STATUS: "+status);
    console.log("===== JSON =====");
    console.log(d);
    console.log("===== JSON =====");
    return res.json(status,{
        data:d,
        errors:e
    }); 
}