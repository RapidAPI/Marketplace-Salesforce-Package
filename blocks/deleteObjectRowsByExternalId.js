var tamplate = require('../Templates/DELETETemplate.js');

module.exports.deleteObjectRowsByExternalId = (req , res) =>{
    
    const {args: sObjectName ,fieldName ,fieldValue , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction.${sObjectName}/${fieldName}/${fieldValue}` , null ,instance , accessToken);
}