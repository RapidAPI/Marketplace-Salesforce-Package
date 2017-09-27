var tamplate = require('../Templates/DELETETemplate.js');

module.exports.deleteRecordByRelationship = (req , res) =>{
  
    const {args : sObjectName, recordId , relationshipFieldName ,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,`?fields=${fields}`,instance , accessToken );
   
}
