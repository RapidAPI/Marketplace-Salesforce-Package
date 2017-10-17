
 

module.exports = (req , res  , template) =>{
    const {args : {instance , accessToken}} = req.body;    
     
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "/process/approvals" ,null, instance , accessToken);
  
}
