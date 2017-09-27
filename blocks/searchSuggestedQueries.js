
var tamplate = require('../Templates/GETTemplate');

module.exports.searchSuggestedQueries = (req , res) =>{
    const {args :query, language, limit, channel, instance , accessToken} = req.body;    
    let urlEnding = `?q=${query}&language=${language}`
    if(limit){
        urlEnding.append(`&limit=${limit}`);
    }
    if(channel){
        urlEnding.append(`&channel=${channel}`);
    }

    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res , "search/suggestSearchQueries" ,urlEnding, instance , accessToken);
  
}

