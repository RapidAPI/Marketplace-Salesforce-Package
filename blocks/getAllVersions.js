// const request = require('request');
// const config = require('../config.json');
// // const instance = config.instance;

// module.exports.versions =(req, res) =>{
//     const instance = req.body.args.instance;
//     request.get(`https://${instance}.salesforce.com/services/data/`, (error, response, body) =>
//     {
//         if(error){
//             res.status(200).send({error});
//         }

//         else{
//             res.status(200).send({body});        
//         }

//     });
// } 
var tamplate = require('../Templates/GETTemplate');

module.exports.versions = (req , res) =>{
     const instance = req.body.args.instance;
     const token = req.body.args.token;
     
    // const {args :approvalProcessName , sObjectName , instance , token } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "" ,null, instance , token);
  
}
