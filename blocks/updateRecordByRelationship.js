var tamplate = require('../Templates/PATCHTamplate');
//TODO: check this

module.exports.updateRecordByRelationship = (req , res) =>{
    
      const {args : sObjectName, recordId , relationshipFieldName,instance , accessToken } = req.body;
      // tamplate(req ,res ,urlEnding ,urlParams)

      return tamplate(req, res, `sobjects/${sObjectName}/${relationshipFieldName}`,null,instance , accessToken );

  }
  