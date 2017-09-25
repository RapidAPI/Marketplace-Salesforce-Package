var tamplate = require('../Templates/GETTemplate');

module.exports.getSalesforceAppDropDownItems = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `appMenu/AppSwitcher`, null,instance , accessToken);
        

}

