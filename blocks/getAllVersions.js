
var tamplate = require('../Templates/GETTemplate');

module.exports.versions = (req , res) =>{
     const instance = req.body.args.instance;
     const accessToken = req.body.args.accessToken;
     
    // const {args :approvalProcessName , sObjectName , instance , accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "" ,null, instance , accessToken);
  
}
