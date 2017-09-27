var tamplate = require('../Templates/GETTemplate');

module.exports.getObjectsQuickActionsdefaultValues = (req , res) =>{
  
    const {args : sObjectName, action, instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}/defaultValues`,null,instance , accessToken );
  
}
