
var tamplate = require('../Templates/GETTemplate');

module.exports.searchScopeOrder = (req , res) =>{
    const {args : instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "search/scopeOrder" ,null, instance , accessToken);
  
}
