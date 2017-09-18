var tamplate = require('../Templates/GETTemplate');
//TODO: check this

module.exports.getObjectsActionsDefaultValuesById = (req , res) =>{

    const {args:  sObjectName , action ,instance , contextId , token } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}/defaultValues`,null,instance , token );
  
}