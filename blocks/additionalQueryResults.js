 

module.exports = (req , res  , template) =>{
 
    const {args : {queryId, instance  , accessToken}} = req.body;
    // template (req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `query/${queryId}`, null,instance , accessToken);
}