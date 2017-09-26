var tamplate = require('../Templates/GETTemplate');

module.exports.getQuickActions = (req , res) =>{
 
    const {args :  instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `quickActions`, null,instance , accessToken);

}
