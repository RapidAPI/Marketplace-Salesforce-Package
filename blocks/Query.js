var tamplate = require('../Templates/GETTemplate');

module.exports.Query = (req , res) =>{
 
    const {args : query, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `query`, `?q=${query}`,instance , accessToken);

}