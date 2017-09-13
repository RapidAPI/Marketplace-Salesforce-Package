var tamplate = require('./genericGETTamplete')

module.exports.getCompactLayouts = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `sobjects/${SOType}/describe/compactLayouts` );
        

}