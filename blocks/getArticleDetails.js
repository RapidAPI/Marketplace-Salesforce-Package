var tamplate = require('../Templates/GETTemplate');

module.exports.getArticleDetails = (req , res) =>{
    const {args : articleId, channel ,updateViewStat , instance , accessToken} = req.body;
        let urlEnding = `?articleId=${articleId}`;
        if(channel){
            urlEnding.concat(`&channel=${channel}`);
        }
        if(updateViewStat){
            urlEnding.concat(`&updateViewStat=${updateViewStat}`);
        }

    // tamplate(req ,res ,urlEnding ,urlParams)
    
    return tamplate(req, res, `/support/knowledgeArticles`,urlEnding ,instance , accessToken);
}