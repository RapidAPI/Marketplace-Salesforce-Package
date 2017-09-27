
var tamplate = require('../Templates/GETTemplate');

module.exports.searchResultsLayouts = (req , res) =>{
    const {args :query, instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , `search/layout` ,`?q=${query}`, instance , accessToken);
  
}
