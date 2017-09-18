var tamplate = require('./genericGETTamplete');
//TODO: check this
module.exports.deleteObjectRowsByExternalId = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const fieldName = args.fieldName;
    const fieldValue = args.fieldValue;
    const instance = args.instance;    
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction.${SOType}/${fieldName}/${fieldValue}` , null ,instance);
}