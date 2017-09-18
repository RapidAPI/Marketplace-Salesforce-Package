var tamplate = require('./genericPOSTTamplate');
//TODO: check this
module.exports.postObjectRowsByExternalId = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const fieldName = args.fieldName;
    const fieldValue = args.fieldValue;
    const postBodyjson = args.postBodyjson;
    const instance = args.instance;    
    
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction.${SOType}/${fieldName}/${fieldValue}`,null ,postBodyjson,instance);
}