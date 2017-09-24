var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.getObjectRowsByExternalId = (req , res) =>{
   
    const {args: sObjectName ,fieldName , fieldValue ,instance, accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/${fieldName}/${fieldValue}`,null,instance,accessToken);
}