var tamplate = require('../Templates/GETTemplate');

module.exports.getPlatformEventByName = (req , res) =>{
 
    const {args : platformEventName ,instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${platformEventName}/eventSchema`, null,instance , accessToken);
        
}