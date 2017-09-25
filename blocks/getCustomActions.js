var tamplate = require('../Templates/GETTemplate');

module.exports.getCustomActions = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `actions/custom`, null,instance , accessToken);

}