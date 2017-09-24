
const request = require('request');
const config = require('../config.json');
const version = config.defultVersion;
const baseUrl = config.baseUrl;

module.exports.versions =(req,res) =>{

    const args = req.body.args;
    const instance = args.instance;
    
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    let url = `https://${instance}.${baseUrl}`;


    request.get({
        url: url,
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
        