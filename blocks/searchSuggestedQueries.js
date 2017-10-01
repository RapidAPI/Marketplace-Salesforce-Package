
 

module.exports = (req , res  , template) =>{
    const {args :{query, language, limit, channel, instance , accessToken}} = req.body;    
    let urlEnding = `?q=${query}&language=${language}`
    if(limit){
        urlEnding.append(`&limit=${limit}`);
    }
    if(channel){
        urlEnding.append(`&channel=${channel}`);
    }

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestSearchQueries" ,urlEnding, instance , accessToken);
  
}

