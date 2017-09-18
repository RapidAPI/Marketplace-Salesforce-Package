var tamplate = require('../Templates/PATCHTamplate');
//TODO: check this
module.exports.updateObjectRowsByExternalId = (req , res) =>{

    const { args : sObjectName ,fieldName , fieldValue , postBodyjson , instance ,contextId  , token} = req.body; 
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/${fieldName}/${fieldValue}`,null ,postBodyjson,instance, token) ;
}