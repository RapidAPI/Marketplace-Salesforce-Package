const request = require('request');
const config = require('../config.json');
//const instance = config.instance;
const version = config.defultVersion;
// const accessToken = config.tocken; 

module.exports.limits =(req, res) =>{
    const instance = req.body.args.instance;
    const accessToken =  req.body.args.accessToken;    
    request.get({ 
        headers:{'Authorization':`Bearer ${accessToken}`},
        url:`https://${instance}.salesforce.com/services/data/v${version}/limits`}, (error, response, body) =>
        {
            if(error){
                res.status(200).send({error});
            }

            else{
                res.status(200).send({body});        
            }

        });
} 