var tamplate = require('./genericGETTamplete')
//TODO: not working! check again
module.exports.getObjectRows = (req , res) =>{
    const args = req.body.args;
    const id = args.id;
    const fields = args.fields;
    const SOType = args.SOType;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(fields){
        return tamplate(req, res, `sobjects/${SOType}/${id}` ,`?fields=${fields}`);
    }
    else{
        return tamplate(req, res, `sobjects/${SOType}/${id}` );
    }

}