const request = require('request');
const config = require('../config.json');
const instance = config.instance;

module.exports.versions =(req, res) =>{

    request.get(`https://${instance}.salesforce.com/services/data/`, (error, response, body) =>
    {
        if(error){
            res.status(200).send({error});
        }

        else{
            res.status(200).send({body});        
        }

    });
} 