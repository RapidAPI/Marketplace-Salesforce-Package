var tamplate = require('../Templates/GETTemplate');

module.exports.getCompactLayouts = (req , res) =>{
    
    const {args : sObjectName ,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectName}/describe/compactLayouts` ,null , instance , accessToken);
        

}