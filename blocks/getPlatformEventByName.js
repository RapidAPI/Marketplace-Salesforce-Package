 

module.exports = (req , res  , template) =>{
 
    const {args : {platformEventName ,instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${platformEventName}/eventSchema`, null,instance , accessToken);
        
}