var tamplate = require('./genericGETTamplete')

module.exports.getObjectsQuickActionsDescriptive = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const action = args.action;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction.${SOType}/quickActions/${action}/describe` );
  
}

