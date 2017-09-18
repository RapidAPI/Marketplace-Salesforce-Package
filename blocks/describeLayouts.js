var tamplate = require('../Templates/GETTemplate');

module.exports.describeLayouts = (req , res) =>{

    const {args : sObjectName ,recordTypeId ,instance , token  } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(sObjectName && recordTypeId){
    return tamplate(req, res, `sobjects/${sObjectName}/describe/layouts/${recordTypeId}` , null ,instance , token);
    }
    else if(sObjectName){
        return tamplate(req, res, `sobjects/${sObjectName}/describe/layouts`),null ,instance , token;
    }
    else{
        return tamplate(req, res, `sobjects/Global/describe/layouts`,null ,instance , token);
    }
    
}