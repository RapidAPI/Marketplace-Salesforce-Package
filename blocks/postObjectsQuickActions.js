 
module.exports = (req , res  , template) =>{
 
    const {args : {sObjectName ,  action , inputs ,instance , accessToken }} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(action){
        return template (req, res, `sobjects/${sObjectName}/quickActions/${action}`,null, inputs, instance, accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/quickActions`,null ,inputs , instance, accessToken);
    }
}
