 

module.exports = (req , res  , template) =>{
 
    const {args : {limit, instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(limit){
        return template (req, res, `recent`, `?limit=${limit}`,instance , accessToken);
    }
    else{
        return template (req, res, `recent`, null ,instance , accessToken);
        
    }
}