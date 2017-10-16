 
module.exports = (req , res  , template) =>{
   
    const {args: {sObjectName,topCategoriesOnly  ,instance, accessToken }} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    if(topCategoriesOnly){
        return template (req, res, `support`,`dataCategoryGroups?sObjectName=${sObjectName}&topCategoriesOnly=${topCategoriesOnly}`, instance, accessToken);
    }
    else{
        return template (req, res, `support`,`dataCategoryGroups?sObjectName=${sObjectName}`, instance, accessToken);
    }
    
}