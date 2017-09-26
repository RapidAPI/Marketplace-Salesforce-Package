var tamplate = require('../Templates/POSTTemplate');
//TODO: check this
module.exports.submitRecordForApproval = (req , res) =>{

    const {args :   submitRecordForApproval , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `process/approvals`,null ,submitRecordForApproval, instance , accessToken);
}