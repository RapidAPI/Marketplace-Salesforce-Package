 
module.exports =(req, res) =>{
    const {args : {sObjectName  , postBodyjson , instance , accessToken}} = req.body;

    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}`,null ,postBodyjson,instance , accessToken);
   
}   
