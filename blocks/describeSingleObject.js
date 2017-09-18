const request = require('request');
const config = require('../config.json');
const instance = config.instance;
const version = config.defultVersion;
const token = config.accessToken; 

module.exports.describe=(req, res) =>{
    
    const args = req.body.args;
    const SOType = args.SOType;
    const instance = args.instance;

    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";

    request.get({
        headers:{'Authorization':`Bearer ${token}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/sobjects/${SOType}/describe`,
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
