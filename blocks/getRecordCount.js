var tamplate = require('../Templates/GETTemplate');

module.exports.getRecordCount = (req , res) =>{
 
    const {args : sObjects, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(sObjects){
        return tamplate(req, res, `recent`, `?sObjects=${sObjects}`,instance , accessToken);
    }
    else{
        return tamplate(req, res, `recent`,null ,instance , accessToken);
    }
}