var tamplate = require('../Templates/GETTemplate');
module.exports.describeListView = (req , res) =>{
   
    const {args: sObjectType,queryLocator  ,instance, accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectType}/listviews/${queryLocator}/describe`,null,instance,accessToken);
    
}