 

module.exports = (req , res  , template) =>{
 
    const {args : {explain, instance  , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `query`, `?explain=${explain}`,instance , accessToken);

}