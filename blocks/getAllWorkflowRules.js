var tamplate = require('../Templates/GETTemplate');

module.exports.getAllWorkflowRules = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `process/rules`, null,instance , accessToken);
        

}

