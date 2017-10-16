
 

module.exports = (req , res  , template) =>{
    const {args : {query, language, publishStatus, articleTypes , categories, channel, 
        limit,publishStatus, topics, validationStatus, instance , accessToken}} = req.body;    
    let urlParams = `?q=${query}&language=${language}&publishStatus=${publishStatus}`
    if(articleTypes){
        urlParams = urlParams.append(`?articleTypes=${articleTypes}`);
    }
    if(categories){
        urlParams = urlParams.append(`&categories=${categories}`);
    }
    if(channel){
        urlParams = urlParams.append(`&channel=${channel}`);
    }
    if(limit){
        urlParams = urlParams.append(`&limit=${limit}`);
    }
    if(publishStatus){
        urlParams =  urlParams.append(`&publishStatus=${publishStatus}`);
    }
    if(topics){
        urlParams = urlParams.append(`&topics=${topics}`);
    }
    if(validationStatus){
        urlParams = urlParams.append(`&validationStatus=${validationStatus}`);
    }
    
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestTitleMatches" ,urlParams, instance , accessToken);
  
}