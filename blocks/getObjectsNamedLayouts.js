
 

module.exports = (req , res  , template) =>{

    const {args : {sObjectName, layoutName, instance , accessToken }} = req.body;

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/describe/namedLayouts/${layoutName}`,null,instance , accessToken);
}

