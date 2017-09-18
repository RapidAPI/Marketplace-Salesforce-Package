var tamplate = require('../Templates/GETTemplate');

module.exports.getObjectsQuickActions = (req , res) =>{

    const {args : sObjectName, action, instance , token } = req.body;
    if(action){
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}` ,null,instance , token);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions`,null,instance , token);
    }
}