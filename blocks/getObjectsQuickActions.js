var tamplate = require('../Templates/GETTemplate');

module.exports.getObjectsQuickActions = (req , res) =>{

    const {args : sObjectName, actionName, instance , accessToken } = req.body;
    if(actionName){
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${actionName}` ,null,instance , accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions`,null,instance , accessToken);
    }
}