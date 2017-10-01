 

module.exports = (req , res  , template) =>{

    const {args : {sObjectName, actionName, instance , accessToken} } = req.body;
    if(actionName){
        return template (req, res, `sobjects/${sObjectName}/quickActions/${actionName}` ,null,instance , accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/quickActions`,null,instance , accessToken);
    }
}