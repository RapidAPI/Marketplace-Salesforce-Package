var tamplate = require('../Templates/POSTTemplate');
module.exports.triggerProcessRules = (req , res) =>{

    const {args :   contextIds , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `process/rules`,null ,contextIds, instance , accessToken);
}

