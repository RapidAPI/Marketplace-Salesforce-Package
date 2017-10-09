 
module.exports = (req , res  , template) =>{
     
    const {args: {recordId , fields , sObjectName,instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(fields){
        return template (req, res, `sobjects/${sObjectName}/${id}` ,`?fields=${fields}`,instance,accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectName}/${id}`,null,instance ,accessToken);
    }

}