 

module.exports = (req , res  , template) =>{
 
    const {args : {sObjectName ,workflowRuleId , instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    url = `process/rules`;
    if(sObjectName){
        if(workflowRuleId){
            url.concat(`${sObjectName}/${workflowRuleId}`);
        }
        else{
            url.concat(sObjectName);
        }
    }
    return template (req, res,url , null,instance , accessToken);

}


