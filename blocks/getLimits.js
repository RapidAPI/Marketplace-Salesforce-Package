
var tamplate = require('../Templates/GETTemplate');

module.exports.limits = (req , res) =>{
     const instance = req.body.args.instance;
     const accessToken = req.body.args.accessToken;
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "limits" ,null, instance , accessToken);
  
}
