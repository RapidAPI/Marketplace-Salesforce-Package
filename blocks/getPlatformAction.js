var tamplate = require('../Templates/GETTemplate');

module.exports.getPlatformAction = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction`, null,instance , accessToken);
        

}