var tamplate = require('../Templates/DELETETemplate.js');

module.exports.getUserPasswordInformation = (req , res) =>{
  
    const {args : sObjectName, userId , instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    
    return tamplate(req, res, `sobjects/User/${userId}/password`,null,instance , accessToken );
    
}
