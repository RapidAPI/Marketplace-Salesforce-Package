var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.getDataCategoryDetail = (req , res) =>{

    const {args : sObjectName ,articleId  ,channel  , updateViewStat , subject ,RecordID
        ,categories ,limit , publishStatus , topics , validationStatus, instance , accessToken} = req.body;
        let urlEnding = `?language=${language}`;
        if(channel){
            urlEnding.concat(`&channel=${channel}`);
        }   
        if(updateViewStat){
            urlEnding.concat(`&updateViewStat=${updateViewStat}`);
        }
       
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `support/knowledgeArticles/${articleId}`,urlEnding ,instance , accessToken)};
