var tamplate = require('../Templates/GETTemplate');

module.exports.getRecentlyViewedItems = (req , res) =>{
 
    const {args : limit, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(limit){
        return tamplate(req, res, `recent`, `?limit=${limit}`,instance , accessToken);
    }
    else{
        return tamplate(req, res, `recent`, null ,instance , accessToken);
        
    }
}