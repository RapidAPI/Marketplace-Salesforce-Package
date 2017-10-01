 
module.exports = (req , res  , template) =>{
   
    const {args: {sObjectType,listViewId  ,instance, accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(listViewId){
        return template (req, res, `sobjects/${sObjectType}/listviews/${listViewId}`,null, instance, accessToken);
    }
    else{
        return template (req, res, `sobjects/${sObjectType}/listviews/`,null, instance, accessToken);
    }
    
}