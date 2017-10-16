 
module.exports = (req , res  , template) =>{
     
    const {args: {recordId , fields , sObjectName,instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(fields){
        return template (req, res, `sobjects/${sObjectName}/${recordId}` ,`fields=${fields}`,instance,accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/${recordId}`,null,instance ,accessToken);
    }

}