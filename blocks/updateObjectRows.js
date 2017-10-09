
module.exports = (req , res  , template) =>{
    
    const { args : {sObjectName ,fields, instance  ,recordId , accessToken}} = req.body;    
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 
    if(fields){
        return template (req, res, `sobjects/${sObjectName}/${recordId}` ,`?fields=${fields}`,instance , accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/${recordId}`,null,instance );
    }
    
}