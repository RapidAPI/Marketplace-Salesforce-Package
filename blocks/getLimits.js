const request = require('request');
const config = require('../config.json');
//const instance = config.instance;
const version = config.defultVersion;
const token = config.accessToken; 

module.exports.limits =(req, res) =>{
    const instance = args.instance;    
    request.get({ 
        headers:{'Authorization':`Bearer ${token}`},
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