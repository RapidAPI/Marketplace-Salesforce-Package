
var tamplate = require('../Templates/GETTemplate');

module.exports.getRecentListViews = (req , res) =>{
 
    const {args : sObjectType, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sobjectType}/listviews/recent`, null,instance , accessToken);

}