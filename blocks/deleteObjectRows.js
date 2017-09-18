const request = require('request');
const config = require('../config.json');
//const instance = config.instance;
// const token = config.accessToken; 
const version = config.defultVersion;

//TODO: check this
module.exports.deleteObjectRows =(req,res) =>{

    const args = req.body.args;
    const sObjectName = args.sObjectName;
    const id = args.id;
    const instance = args.instance
    const token = args.token;

    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";


    request.delete({
        headers:{'Authorization':`Bearer ${token}`},
        url: `https://${instance}.salesforce.com/services/data/v${version}/sobjects/${sObjectName}/${id}`,
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