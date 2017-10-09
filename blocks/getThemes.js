const request = require('request');
const config = require('../config.json');
const version = config.defultVersion;

module.exports =(req, res , template) =>{
    
    const args = req.body.args;
    const If_Modified_Since = args.If_Modified_Since;
    const instance = args.instance;
    const accessToken = args.accessToken;
    //TODO: change template to fit this
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    let header = {};
    if(If_Modified_Since){
        header = {'Authorization':`Bearer ${accessToken}`,
                'If-Modified-Since':If_Modified_Since };
    }
    else{
        header = {'Authorization':`Bearer ${accessToken}`};
    }
    // make the request
    request.get({
        headers: header,
        url: `https://${instance}.salesforce.com/services/data/v${version}/theme`,
    }
    ,function(err, response, body){
        if (err) {
            r.contextWrites[to] = err;
            r.callback = 'error';
        }
        else {
            response.body = JSON.parse(response.body);            
            r.contextWrites[to] = response;
            r.callback = 'success';
        }
        res.status(200).send(r);
        });
};
