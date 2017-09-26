var tamplate = require('../Templates/GETTemplate');

module.exports.explainQuery = (req , res) =>{
 
    const {args : explain, instance  , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `query`, `?explain=${explain}`,instance , accessToken);

}