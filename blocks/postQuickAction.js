var tamplate = require('../Templates/POSTTemplate');

module.exports.postQuickAction = (req , res) =>{
 
    const {args : actionName, input, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `quickActions/${actionName}`, input,instance , accessToken);

}