const request = require('request');
const config = require('../config.json');
const instance = config.instance;
const version = config.defultVersion;
const token = config.accessToken; 

//TODO: check this endpoint
module.exports.getUpdated=(req, res) =>{
    
    const args = req.body.args;
    const SOType = args.SOType;
    const start = args.start;
    const end = args.end;

    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";

    request.get({
        headers:{'Authorization':`Bearer ${token}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/sobjects/${SOType}/deleted/?start=${start}end=${end}`,
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
