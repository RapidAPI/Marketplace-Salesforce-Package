var tamplate = require('../Templates/GETTemplate');
//TODO: check this

module.exports.getObjectsQuickActionsdefaultValues = (req , res) =>{
  
    const {args : sObjectName, action, instance , token } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}/defaultValues`,null,instance , token );
  
}
