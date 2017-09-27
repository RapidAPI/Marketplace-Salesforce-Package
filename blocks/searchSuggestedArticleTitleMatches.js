
var tamplate = require('../Templates/GETTemplate');

module.exports.searchSuggestedArticleTitleMatches = (req , res) =>{
    const {args : query, language, publishStatus, articleTypes , categories, channel, 
        limit,publishStatus, topics, validationStatus, instance , accessToken} = req.body;    
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

    
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "search/suggestTitleMatches" ,urlEnding, instance , accessToken);
  
}