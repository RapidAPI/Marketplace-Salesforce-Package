 

module.exports = (req , res  , template) =>{
  
    const {args :{ sObjectName, actionName, instance , accessToken }} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/quickActions/${actionName}/defaultValues`,null,instance , accessToken );
  
}
