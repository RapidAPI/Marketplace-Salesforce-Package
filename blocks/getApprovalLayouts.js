var tamplate = require('./genericGETTamplete')

module.exports.getApprovalLayouts = (req , res) =>{
    const args = req.body.args;
    const approvalProcessName = args.approvalProcessName;
    const SOType = args.SOType;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(approvalProcessName){
        return tamplate(req, res, `sobjects/${SOType}/describe/approvalLayouts/${approvalProcessName}`);
    }
    else{
        return tamplate(req, res, `sobjects/${SOType}/describe/approvalLayouts` );
        
    }

}