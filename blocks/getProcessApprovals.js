
var tamplate = require('../Templates/GETTemplate');

module.exports.getProcessApprovals = (req , res) =>{
    const {args : instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "getProcessApprovals" ,null, instance , accessToken);
  
}
