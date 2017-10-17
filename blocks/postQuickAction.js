 

module.exports = (req , res  , template) =>{
 
    const {args :{ actionName, inputs, instance , accessToken}} = req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `quickActions/${actionName}`, inputs,instance , accessToken);

}