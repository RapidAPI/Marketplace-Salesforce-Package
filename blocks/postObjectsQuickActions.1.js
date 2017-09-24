var tamplate = require('../Templates/POSTTemplate');
//TODO: check this
module.exports.postObjectsQuickActions = (req , res) =>{
 
    const {args : sObjectName ,  action , postBodyjson ,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(action){
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions/${action}`,null, postBodyjson, instance, accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/quickActions`,null ,postBodyjson , instance, accessToken);
    }
}
