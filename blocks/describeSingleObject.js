const request = require('request');
const config = require('../config.json');
// const instance = config.instance;
// const token = config.accessToken; 
const version = config.defultVersion;

module.exports.describe=(req, res) =>{
    
    const args = req.body.args;
    const sObjectName = args.sObjectName;
    const instance = args.instance;
    const token = args.token;
    
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";

    request.get({
        headers:{'Authorization':`Bearer ${token}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/sobjects/${sObjectName}/describe`,
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
