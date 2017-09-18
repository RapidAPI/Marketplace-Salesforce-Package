var tamplate = require('../Templates/GETTemplate');
//TODO: not working! check again
module.exports.getObjectRows = (req , res) =>{
     
    const {args: id , fields , sObjectName,instance , token } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(fields){
        return tamplate(req, res, `sobjects/${sObjectName}/${id}` ,`?fields=${fields}`,instance,token);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/${id}`,null,instance ,token);
    }

}