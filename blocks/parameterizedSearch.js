
module.exports = (req , res  , template) =>{
    const args = req.body.args;
    let instance = args.instance;
    let accessToken = args.accessToken;
    let postJsonBody = {q : args.query};
    Object.keys(args).forEach(key => {
        if((key != "accessToken")&&(key != "instance" )&&(key != "query")){
            postJsonBody[key]  = args[key];
        }
    });
    postJsonBody = JSON.stringify(postJsonBody);
// template (req, res,urlEnding,urlParams,postBodyjson , instance , accessToken)
return template (req, res, `parameterizedSearch`,null ,postJsonBody,instance , accessToken);
}