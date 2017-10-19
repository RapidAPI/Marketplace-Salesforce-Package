 

module.exports = (req , res  , template) =>{
  
    const {args : {sObjectName, recordId , relationshipFieldName, fields,instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(fields){
        return template (req, res, `sobjects/${sObjectName}/${recordId}/${relationshipFieldName}`,`fields=${fields}`,instance , accessToken );
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/${recordId}/${relationshipFieldName}`,null,instance , accessToken );
    }
}
