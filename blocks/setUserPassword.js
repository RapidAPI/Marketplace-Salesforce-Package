 

module.exports = (req , res  , template) =>{

    const {args : {sObjectName, userId , newPassword, instance , accessToken } }= req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) 
    return template (req, res, `sobjects/User/${userId}/password`,null, { "NewPassword" : newPassword},instance , accessToken );
    
}
