
module.exports = (req , res) =>{
 
    const {args : {queryId, instance  , accessToken}} = req.body;
    // template (req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `queryAll/${queryId}`, null,instance , accessToken);
}