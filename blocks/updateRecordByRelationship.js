
module.exports = (req , res  , template) =>{
    
      const {args : {sObjectName, recordId , relationshipFieldName,instance , accessToken} } = req.body;
      // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 

      return template (req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,null,instance , accessToken );

  }
  