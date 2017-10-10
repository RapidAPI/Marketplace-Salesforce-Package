 

module.exports = (req , res  , template) =>{
    
    const {args : {object ,instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/Object/describe/compactLayouts/` ,null , instance , accessToken);

}