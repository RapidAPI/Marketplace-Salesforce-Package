const request = require('request');
const config = require('../config.json');
const version = config.defultVersion;

module.exports.getUpdated=(req, res) =>{
    
    const args = req.body.args;
    const sObjectName = args.sObjectName;
    const start = args.start;
    const end = args.end;
    const instance = args.instance;    
    const accessToken = args.accessToken;
    
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";

    request.get({
        headers:{'Authorization':`Bearer ${accessToken}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/sobjects/${sObjectName}/deleted/?start=${start}end=${end}`,
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
