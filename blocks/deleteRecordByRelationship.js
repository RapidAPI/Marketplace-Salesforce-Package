var tamplate = require('../Templates/DELETETemplate.js');
//TODO: check this

module.exports.deleteRecordByRelationship = (req , res) =>{
  
    const {args : sObjectName, recordId , relationshipFieldName ,instance , token } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,`?fields=${fields}`,instance , token );
   
}
