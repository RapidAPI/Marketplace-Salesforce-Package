
module.exports = (req , res  , template) =>{
    const {args: {sObjectName ,recordId  , instance , accessToken}} = req.body;
    // template (req, res, urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/${recordId}` , null ,instance , accessToken);
}