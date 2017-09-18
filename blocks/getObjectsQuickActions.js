var tamplate = require('./genericGETTamplete');
//TODO: check this
module.exports.getObjectsQuickActions = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const action = args.action;
    const instance = args.instance;        
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(action){
        return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions/${action}` ,null,instance);
    }
    else{
        return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions`,null,instance );
    }
}