 
module.exports =(req, res ,template) =>{
    const {args : {sObjectName  , inputs , instance , accessToken}} = req.body;

    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}`,null ,inputs,instance , accessToken);
   
}   
