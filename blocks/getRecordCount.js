 

module.exports = (req , res  , template) =>{
 
    const {args :{ sObjects, instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(sObjects){
        return template (req, res, `limits/recordCount`, `sObjects=${sObjects}`,instance , accessToken);
    }
    else{
        return template (req, res, `limits/recordCount`,null ,instance , accessToken);
    }
}