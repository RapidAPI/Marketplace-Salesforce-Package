 

module.exports = (req , res  , template) =>{

    const {args :  {submitRecordForApproval , instance , accessToken}} = req.body;
    // template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
    return template (req, res, `process/approvals`,null ,submitRecordForApproval, instance , accessToken);
}