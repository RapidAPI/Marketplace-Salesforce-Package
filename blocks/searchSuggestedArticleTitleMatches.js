
 

module.exports = (req , res  , template) =>{
    const {args : {query, language, publishStatus, articleTypes , categories, channel, 
        limit,publishStatus, topics, validationStatus, instance , accessToken}} = req.body;    
    let urlEnding = `?q=${query}&language=${language}&publishStatus=${publishStatus}`
    if(articleTypes){
        urlEnding.append(`?articleTypes=${articleTypes}`);
    }
    if(categories){
        urlEnding.append(`&categories=${categories}`);
    }
    if(channel){
        urlEnding.append(`&channel=${channel}`);
    }
    if(limit){
        urlEnding.append(`&limit=${limit}`);
    }
    if(publishStatus){
        publishStatus.append(`&publishStatus=${publishStatus}`);
    }
    if(topics){
        urlEnding.append(`&topics=${topics}`);
    }
    if(validationStatus){
        urlEnding.append(`&validationStatus=${validationStatus}`);
    }

    
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestTitleMatches" ,urlEnding, instance , accessToken);
  
}