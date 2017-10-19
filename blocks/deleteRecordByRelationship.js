 

module.exports = (req , res  , template) =>{
  
    const {args :{ sObjectName, recordId , relationshipFieldName ,instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/${recordId}/${relationshipFieldName}`,`fields=${fields}`,instance , accessToken );
   
}
