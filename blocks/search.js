
var tamplate = require('../Templates/GETTemplate');

module.exports.search = (req , res) =>{
    const {args : query, instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "search" ,`?q=${query}`, instance , accessToken);
  
}
