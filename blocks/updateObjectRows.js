
module.exports = (req , res  , template) =>{
    
    const { args : {sObjectName ,fields, instance  ,id , accessToken}} = req.body;    
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 
    if(fields){
        return template (req, res, `sobjects/${sObjectName}/${id}` ,`?fields=${fields}`,instance , accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/${id}`,null,instance );
    }
    
}