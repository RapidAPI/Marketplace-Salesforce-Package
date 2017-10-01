 

module.exports = (req , res  , template) =>{
 
    const {args : {sObjectName , instance  , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/describe`, null ,instance , accessToken);

}