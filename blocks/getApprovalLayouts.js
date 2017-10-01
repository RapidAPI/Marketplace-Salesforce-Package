 

module.exports = (req , res  , template) =>{

    const {args :{approvalProcessName , sObjectName , instance , accessToken }} = req.body;
        //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(approvalProcessName){
        return template (req, res, `sobjects/${sObjectName}/describe/approvalLayouts/${approvalProcessName}`, null , instance , accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/describe/approvalLayouts` , null , instance , accessToken);
        
    }

}