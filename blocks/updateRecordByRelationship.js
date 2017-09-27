var tamplate = require('../Templates/PATCHTamplate');

module.exports.updateRecordByRelationship = (req , res) =>{
    
      const {args : sObjectName, recordId , relationshipFieldName,instance , accessToken } = req.body;
      // tamplate(req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 

      return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,null,instance , accessToken );

  }
  