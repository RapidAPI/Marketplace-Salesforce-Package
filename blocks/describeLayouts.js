var tamplate = require('./genericGETTamplete')

module.exports.describeLayouts = (req , res) =>{
    const args = req.body.args;
    const SOType = args.SOType;
    const recordTypeId = args.recordTypeId;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(SOType && recordTypeId){
    return tamplate(req, res, `sobjects/${SOType}/describe/layouts/${recordTypeId}`);
    }
    else if(SOType){
        return tamplate(req, res, `sobjects/${SOType}/describe/layouts`);
    }
    else{
        return tamplate(req, res, `sobjects/Global/describe/layouts`);
    }
    
}