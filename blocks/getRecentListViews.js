
 

module.exports = (req , res  , template) =>{
 
    const {args : {sObjectType, instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sobjectType}/listviews/recent`, null,instance , accessToken);

}