var tamplate = require('../Templates/GETTemplate');

module.exports.additionalQueryAll = (req , res) =>{
 
    const {args : queryId, instance  , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `queryAll/${queryId}`, null,instance , accessToken);
}