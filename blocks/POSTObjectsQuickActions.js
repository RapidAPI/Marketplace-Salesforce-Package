var tamplate = require('./genericPOSTTamplate')
//TODO: check this
module.exports.POSTObjectsQuickActions = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const action = args.action;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(action){
        return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions/${action}` );
    }
    else{
        return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions` );
    }
}