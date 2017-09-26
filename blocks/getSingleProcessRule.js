var tamplate = require('../Templates/GETTemplate');

module.exports.getStandardActions = (req , res) =>{
 
    const {args : sObjectName ,workflowRuleId , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    url = `actions/standard`;
    if(sObjectName){
        if(workflowRuleId){
            url.concat(`${sObjectName}/${workflowRuleId}`);
        }
        else{
            url.concat(sObjectName);
        }
    }
    return tamplate(req, res,url , null,instance , accessToken);

}


