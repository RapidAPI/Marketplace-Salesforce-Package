var tamplate = require('../Templates/GETTemplate');

module.exports.getSalesforceNavMenuItems = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `appMenu/Salesforce1/`, null,instance , accessToken);
        

}