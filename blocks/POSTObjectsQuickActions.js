var tamplate = require('./genericPOSTTamplate');
//TODO: check this
module.exports.postObjectsQuickActions = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const action = args.action;
    const postBodyjson = args.postBodyjson;
    const instance = args.instance;    
    
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(action){
        return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions/${action}`,null, postBodyjson, instance);
    }
    else{
        return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions`,null ,postBodyjson , instance);
    }
}