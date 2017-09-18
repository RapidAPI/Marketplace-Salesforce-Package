const request = require('request');
const config = require('../config.json');


module.exports.getAccessToken =(req, res) =>{
    
    const args = req.body;
    const {args: {username , password}} = req.body;
    const ReqBody = `grant_type=${config.grant_type}&client_id=${config.client_id}&client_secret=${config.client_secret}&username=${username}&password=${password}`
    let r = {
        callback        : "",
        contextWrites   : {}
    };
    
    let to = args.to || "to";
    request.post({
        headers:{
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        url: `https://login.salesforce.com/services/oauth2/token`,
        body:  ReqBody
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


