
var tamplate = require('../Templates/GETTemplate');

module.exports.limits = (req , res) =>{
    const {args : instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "limits" ,null, instance , accessToken);
  
}
