var tamplate = require('../Templates/GETTemplate');

module.exports.getRecentlyViewedItems = (req , res) =>{
 
    const {args : limit, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `recent`, `?limit=${limit}`,instance , accessToken);

}