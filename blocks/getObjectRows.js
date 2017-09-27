var tamplate = require('../Templates/GETTemplate');
module.exports.getObjectRows = (req , res) =>{
     
    const {args: id , fields , sObjectName,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(fields){
        return tamplate(req, res, `sobjects/${sObjectName}/${id}` ,`?fields=${fields}`,instance,accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/${id}`,null,instance ,accessToken);
    }

}