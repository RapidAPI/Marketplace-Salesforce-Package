 

module.exports = (req , res  , template) =>{

    const {args :  {approvalRequest , instance , accessToken}} = req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `process/approvals`,null ,approvalRequest, instance , accessToken);
}