 
module.exports = (req , res  , template) =>{

    const {args : {contextIds , instance , accessToken}} = req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `process/rules`,null ,contextIds, instance , accessToken);
}

