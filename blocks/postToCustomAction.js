var tamplate = require('../Templates/POSTTemplate');
module.exports.postToCustomAction = (req , res) =>{

    const {args :   actionName, inputs , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `actions/custom/${actionName}/`,null ,inputs, instance , accessToken);
}