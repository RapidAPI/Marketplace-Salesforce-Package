
var tamplate = require('../Templates/GETTemplate');

module.exports.getKnowledgeLanguageSettings = (req , res) =>{
    const {args : instance , accessToken} = req.body;    
     
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "knowledgeManagement/settings" ,null, instance , accessToken);
  
}
