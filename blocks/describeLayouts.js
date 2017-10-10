 

module.exports = (req , res  , template) =>{

    const {args :{ sObjectName ,recordTypeId ,instance , accessToken } } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    console.log(sObjectName);
    if(sObjectName && recordTypeId){
    return template (req, res, `sobjects/${sObjectName}/describe/layouts/${recordTypeId}` , null ,instance , accessToken);
    }
    else if(sObjectName){
        return template (req, res, `sobjects/${sObjectName}/describe/layouts`,null ,instance , accessToken);
    }
    else{
        return template (req, res, `sobjects/Global/describe/layouts`,null ,instance , accessToken);
    }
    
}