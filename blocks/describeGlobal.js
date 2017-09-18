const request = require('request');
const config = require('../config.json');
//const instance = config.instance;
// const token = config.accessToken; 
const version = config.defultVersion;

module.exports.describeGlobal =(req, res) =>{
    
    const args = req.body.args;
    const If_Modified_Since = args.If_Modified_Since;
    const instance = args.instance;
    const token = args.token;
    //TODO: check with flag const If_Modified_Since = 
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    let header = {};
    if(If_Modified_Since){
        header = {'Authorization':`Bearer ${token}`,
                'If_Modified_Since':If_Modified_Since };
    }
    else{
        header = {'Authorization':`Bearer ${token}`};
    }
    // make the request
    request.get({
        headers: header,
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
