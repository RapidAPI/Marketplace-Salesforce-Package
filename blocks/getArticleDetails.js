 

module.exports = (req , res  , template) =>{
    const {args : {articleId, channel ,updateViewStat , instance , accessToken}} = req.body;
        let urlParams = `?articleId=${articleId}`;
        if(channel){
            urlParams = urlParams.concat(`&channel=${channel}`);
        }
        if(updateViewStat){
            urlParams = urlParams.concat(`&updateViewStat=${updateViewStat}`);
        }

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    
    return template (req, res, `support/knowledgeArticles`,urlParams ,instance , accessToken);
}