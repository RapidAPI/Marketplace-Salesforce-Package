 
module.exports = (req , res  , template) =>{

    const {args : {actionName, inputs , instance , accessToken}} = req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `actions/standard/${actionName}/`,null ,inputs,instance , accessToken);
}