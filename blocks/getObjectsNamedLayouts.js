
 

module.exports = (req , res  , template) =>{

    const {args : {sObjectName, namedLayout , instance , accessToken }} = req.body;

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/describe/namedLayouts/${namedLayout}`,null,instance , accessToken);
}