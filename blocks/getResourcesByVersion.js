const request = require('request');
const config = require('../config.json');
//const instance = config.instance;
// const accessToken = config.accessToken; 


module.exports.getResourcesByVersion =(req, res) =>{

    const args = req.body.args;
    const version = args.version || config.defultVersion;  
    const instance = args.instance;    
    const accessToken = args.accessToken;

    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";

    request.get({
        headers:{'Authorization':`Bearer ${accessToken}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/`,
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
        