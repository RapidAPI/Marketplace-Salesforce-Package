var tamplate = require('../Templates/GETTemplate');

module.exports.getObjectsQuickActions = (req , res) =>{

    const {args : sObjectName, action, instance , accessToken } = req.body;
    if(action){
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}` ,null,instance , accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions`,null,instance , accessToken);
    }
}