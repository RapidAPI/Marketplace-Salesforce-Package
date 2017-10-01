 

module.exports = (req , res  , template) =>{
 
    const {args :{ actionName, input, instance , accessToken}} = req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `quickActions/${actionName}`, input,instance , accessToken);

}