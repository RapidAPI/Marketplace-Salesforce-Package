var tamplate = require('../Templates/GETTemplate');

module.exports.getRecordsByRelationship = (req , res) =>{
  
    const {args : sObjectName, recordId , relationshipFieldName, fields,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(fields){
        return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,`?fields=${fields}`,instance , accessToken );
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,null,instance , accessToken );
    }
}
