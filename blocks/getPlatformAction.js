var tamplate = require('../Templates/GETTemplate');

module.exports.getPlatformAction = (req , res) =>{
 
    const {args : instance , token} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction`, null,instance , token);
        

}