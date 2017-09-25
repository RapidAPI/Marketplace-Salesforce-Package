var tamplate = require('../Templates/GETTemplate');

module.exports.getCompactLayouts = (req , res) =>{
    
    const {args : objects ,instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `compactLayouts` ,`q?objects` , instance , accessToken);
        

}