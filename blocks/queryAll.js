var tamplate = require('../Templates/GETTemplate');

module.exports.queryAll = (req , res) =>{
 
    const {args : query, instance  , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `queryAll/${query}`, null,instance , accessToken);

}