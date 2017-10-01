 

module.exports = (req , res  , template) =>{
  
    const {args : {sObjectName, userId , instance , accessToken }} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    
    return template (req, res, `sobjects/User/${userId}/password`,null,instance , accessToken );
    
}
