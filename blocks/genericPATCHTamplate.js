const request = require('request');
const config = require('../config.json');
//const instance = config.instance;
const version = config.defultVersion;
const token = config.accessToken; 
const baseUrl = config.baseUrl;


module.exports =(req, res,urlEnding,urlParams,postBodyjson , instace) =>{
    
    const args = req.body.args;
    const SOName = args.SOName;
    const SOType = args.SOType;

    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    let url = ""
    if(urlParams){
        url = `https://${instance}.${baseUrl}/v${version}/${urlEnding}/${urlParams}`;
    }
    else{
        url = `https://${instance}.${baseUrl}/v${version}/${urlEnding}`;
    }

    request.patch({
        headers:{
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        },
        url: url,
        json:  postBodyjson 
    }

    ,function(err, response, body){
        if (err) {
            r.contextWrites[to] = err;
            r.callback = 'error';
        }
        else {
            r.contextWrites[to] = response;
            r.callback = 'success';
        }
        res.status(200).send(r);
        });
}   
