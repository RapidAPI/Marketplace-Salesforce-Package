var tamplate = require('../Templates/POSTTemplate');
//TODO: check this
module.exports.postObjectRowsByExternalId = (req , res) =>{

    const {args : sObjectName , fieldName , fieldValue , postBodyjson , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/${fieldName}/${fieldValue}`,null ,postBodyjson,instance , accessToken);
}