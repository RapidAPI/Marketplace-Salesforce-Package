 
module.exports = (req , res  , template) =>{
   
    const {args: {sObjectType,listViewId  ,instance, accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectType}/listviews/${listViewId}/results`,null, instance, accessToken);
    
}