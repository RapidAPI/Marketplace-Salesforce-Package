const request = require('request');
const config = require('../config.json');

const version = config.defultVersion;
const baseUrl = config.baseUrl;


module.exports =(req, res,urlEnding,urlParams,postBodyjson , instance , accessToken) =>{
    
    const args = req.body.args;
    let parsedJson = JSON.parse(postBodyjson);
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    let url = ""
    if(urlParams){
        url = `https://${instance}.${baseUrl}/v${version}/${urlEnding}?${urlParams}`;
    }
    else{
        url = `https://${instance}.${baseUrl}/v${version}/${urlEnding}`;
    }

    request.post({
        headers:{
            "Authorization" : `Bearer ${accessToken}`,
            "Content-Type" : "application/json"
        },
        url: url,
        json:  parsedJson
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
