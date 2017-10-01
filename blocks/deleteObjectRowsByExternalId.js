 

module.exports = (req , res  , template) =>{
    
    const {args: {sObjectName ,fieldName ,fieldValue , instance , accessToken}} = req.body;
    // template (req, res, urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/PlatformAction/${sObjectName}/${fieldName}/${fieldValue}` , null ,instance , accessToken);
}