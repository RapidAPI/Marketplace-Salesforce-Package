var tamplate = require('../Templates/POSTTemplate.js');

module.exports.getUserPasswordInformation = (req , res) =>{

    const {args : sObjectName, userId , newPassword, instance , accessToken } = req.body;
    // tamplate(req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 
    return tamplate(req, res, `sobjects/User/${userId}/password`,null, newPassword,instance , accessToken );
    
}
