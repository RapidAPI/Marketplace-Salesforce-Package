
 

module.exports = (req , res  , template) =>{
    const {args :{query, language, limit, channel, instance , accessToken}} = req.body;    
    let urlParams = `?q=${query}&language=${language}`
    if(limit){
        urlParams =  urlParams.append(`&limit=${limit}`);
    }
    if(channel){
        urlParams =  urlParams.append(`&channel=${channel}`);
    }

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestSearchQueries" ,urlParams, instance , accessToken);
  
}

