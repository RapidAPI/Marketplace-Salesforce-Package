 
module.exports = (req , res  , template) =>{

    const {args : {sObjectName, action, instance , accessToken} } = req.body;
;    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/quickActions/${action}/describe` ,null, instance , accessToken);
  
}

