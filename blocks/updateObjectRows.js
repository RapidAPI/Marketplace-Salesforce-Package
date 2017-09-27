var tamplate = require('../Templates/PATCHTemplate');

module.exports.updateObjectRows = (req , res) =>{
    
    const { args : sObjectName ,fields, instance  ,id , accessToken} = req.body;    
    // tamplate(req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 
    if(fields){
        return tamplate(req, res, `sobjects/${sObjectName}/${id}` ,`?fields=${fields}`,instance , accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/${id}`,null,instance );
    }
    
}