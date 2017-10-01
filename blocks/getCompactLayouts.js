 

module.exports = (req , res  , template) =>{
    
    const {args : {objects ,instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `compactLayouts` ,`q?objects` , instance , accessToken);
        

}