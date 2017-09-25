var tamplate = require('../Templates/POSTTemplate');
//TODO: check this
module.exports.postToStandardAction = (req , res) =>{

    const {args :   actionName, inputs , instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `actions/standard/${actionName}/`,null ,inputs,instance , accessToken);
}