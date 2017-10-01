 

module.exports = (req , res  , template) =>{
    const {args : {articleId, channel ,updateViewStat , instance , accessToken}} = req.body;
        let urlEnding = `?articleId=${articleId}`;
        if(channel){
            urlEnding.concat(`&channel=${channel}`);
        }
        if(updateViewStat){
            urlEnding.concat(`&updateViewStat=${updateViewStat}`);
        }

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    
    return template (req, res, `/support/knowledgeArticles`,urlEnding ,instance , accessToken);
}