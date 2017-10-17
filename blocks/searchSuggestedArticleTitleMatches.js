
 

module.exports = (req , res  , template) =>{
    const {args : {query, language, publishStatus, articleTypes , categories, channel, 
        limit, topics, validationStatus, instance , accessToken}} = req.body;    
    let urlParams = `q=${query}&language=${language}&publishStatus=${publishStatus}`;
    if(articleTypes){
        urlParams = urlParams.concat(`&articleTypes=${articleTypes}`);
    }
    if(categories){
        urlParams = urlParams.concat(`&categories=${categories}`);
    }
    if(channel){
        urlParams = urlParams.concat(`&channel=${channel}`);
    }
    if(limit){
        urlParams = urlParams.concat(`&limit=${limit}`);
    }
    if(publishStatus){
        urlParams =  urlParams.concat(`&publishStatus=${publishStatus}`);
    }
    if(topics){
        urlParams = urlParams.concat(`&topics=${topics}`);
    }
    if(validationStatus){
        urlParams = urlParams.concat(`&validationStatus=${validationStatus}`);
    }
    
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestTitleMatches" ,urlParams, instance , accessToken);
  
}