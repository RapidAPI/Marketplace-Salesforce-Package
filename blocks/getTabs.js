
var tamplate = require('../Templates/GETTemplate');

module.exports.getTabs = (req , res) =>{
    const {args : instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "tabs" ,null, instance , accessToken);
  
}
