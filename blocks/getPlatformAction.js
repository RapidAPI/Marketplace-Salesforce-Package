var tamplate = require('./genericGETTamplete')

module.exports.getPlatformAction = (req , res) =>{
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/PlatformAction` );
        

}