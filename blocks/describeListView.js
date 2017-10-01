 
module.exports = (req , res  , template) =>{
   
    const {args: {sObjectType,queryLocator  ,instance, accessToken }} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectType}/listviews/${queryLocator}/describe`,null,instance,accessToken);
    
}