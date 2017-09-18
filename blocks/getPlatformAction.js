var tamplate = require('./genericGETTamplete');

module.exports.getPlatformAction = (req , res) =>{
    const instance = args.instance;    
    
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction`, null,instance);
        

}