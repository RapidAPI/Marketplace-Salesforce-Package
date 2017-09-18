var tamplate = require('../Templates/GETTemplate');
//TODO: check this

module.exports.getRecordsByRelationship = (req , res) =>{
  
    const {args : sObjectName, recordId , relationshipFieldName, fields,instance , token } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(fields){
        return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,`?fields=${fields}`,instance , token );
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,null,instance , token );
    }
}
