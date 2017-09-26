var tamplate = require('../Templates/POSTTemplate');
//TODO: check this
module.exports.postObjectsQuickActions = (req , res) =>{
 
    const {args : sObjectName ,  action , inputs ,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(action){
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}`,null, inputs, instance, accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions`,null ,inputs , instance, accessToken);
    }
}
