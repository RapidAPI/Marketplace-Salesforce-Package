var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.getListViews = (req , res) =>{
   
    const {args: sObjectType,listViewId  ,instance, accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(listViewId){
        return tamplate(req, res, `sobjects/${sObjectType}/listviews/${listViewId}`,null, instance, accessToken);
    }
    else{
        return tamplate(req, res, `sobjects/${sObjectType}/listviews/`,null, instance, accessToken);
    }
    
}