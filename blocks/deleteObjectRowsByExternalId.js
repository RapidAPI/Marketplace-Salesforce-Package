var tamplate = require('../Templates/DELETETemplate.js');
//TODO: check this
module.exports.deleteObjectRowsByExternalId = (req , res) =>{
    
    const {args: sObjectName ,fieldName ,fieldValue , instance , token} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction.${sObjectName}/${fieldName}/${fieldValue}` , null ,instance , token);
}