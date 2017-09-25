var tamplate = require('../Templates/GETTemplate');

module.exports.getStandardActions = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `actions/standard`, null,instance , accessToken);

}