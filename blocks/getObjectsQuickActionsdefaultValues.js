var tamplate = require('./genericGETTamplete');
//TODO: check this

module.exports.getObjectsQuickActionsdefaultValues = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const action = args.action;
    const instance = args.instance;    
    
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions/${action}/defaultValues`,null,instance );
  
}
