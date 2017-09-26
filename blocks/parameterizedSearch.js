var tamplate = require('../Templates/POSTTemplate');
//TODO: check this
module.exports.parameterizedSearch = (req , res) =>{
        const args = req.body;
        let postJsonBody = {q : args.query};
        for(key in args){
            if((key != accessToken)&&(key != instance )&&(key != query)){
                postJsonBody[key]  = args[key];
            }
        }
        postJsonBody = JSON.stringify(postJsonBody);
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `parameterizedSearch`,null ,postJsonBody,instance , accessToken);
}