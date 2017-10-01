 
module.exports = (req , res  , template) =>{

    const { args : {sObjectName ,fieldName , fieldValue , postBodyjson , instance ,contextId  , accessToken}} = req.body; 
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 
    return template (req, res, `sobjects/${sObjectName}/${fieldName}/${fieldValue}`,null ,postBodyjson,instance, accessToken) ;
}
