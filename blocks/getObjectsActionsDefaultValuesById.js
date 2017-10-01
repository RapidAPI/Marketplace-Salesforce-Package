 
module.exports = (req , res  , template) =>{

    const {args: { sObjectName , action ,instance , contextId , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/quickActions/${action}/defaultValues`,null,instance , accessToken );
  
}