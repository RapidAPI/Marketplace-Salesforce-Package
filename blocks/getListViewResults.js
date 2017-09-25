var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.getListViewResults = (req , res) =>{
   
    const {args: sObjectType,listViewId  ,instance, accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${sObjectType}/listviews/${listViewId}/results`,null, instance, accessToken);
    
}