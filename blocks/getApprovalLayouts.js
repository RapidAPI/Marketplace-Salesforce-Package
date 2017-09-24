var tamplate = require('../Templates/GETTemplate');

module.exports.getApprovalLayouts = (req , res) =>{

    const {args :approvalProcessName , sObjectName , instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(approvalProcessName){
        return tamplate(req, res, `sobjects/${sObjectName}/describe/approvalLayouts/${approvalProcessName}`, null , instance , accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectName}/describe/approvalLayouts` , null , instance , accessToken);
        
    }

}