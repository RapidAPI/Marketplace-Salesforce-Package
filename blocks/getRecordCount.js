var tamplate = require('../Templates/GETTemplate');

module.exports.getRecordCount = (req , res) =>{
 
    const {args : sObjects, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `recent`, `?sObjects=${sObjects}`,instance , accessToken);

}