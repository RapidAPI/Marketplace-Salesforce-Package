var tamplate = require('../Templates/GETTemplate');

module.exports.additionalQueryResults = (req , res) =>{
 
    const {args : queryId, instance  , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `query/${queryId}`, null,instance , accessToken);
}