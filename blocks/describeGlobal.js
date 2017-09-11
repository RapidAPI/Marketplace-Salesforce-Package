const request = require('request');
const config = require('../config.json');
const instance = config.instance;
const version = config.defultVersion;
const token = config.accessToken; 

module.exports.describeGlobal =(req, res) =>{
    
    const args = req.body.args;
    //TODO: add const If_Modified_Since = 
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";

    request.get({
        headers:{'Authorization':`Bearer ${token}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/sobjects`,
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
};
