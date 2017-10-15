
 

module.exports = (req , res  , template) =>{
    const {args :{fields, groupId, ignoreUnsupportedSObjects, limit, networkId, query, sobject,
    topicId, type, userId, useSearchScope, where, instance , accessToken}} = req.body;    
    let urlEnding = `?q=${query}&sobject=${sobject}`
    if(fields){
        urlEnding.append(`${fields}`);
    }
    if(groupId){
        urlEnding.append(`&groupId=${groupId}`);
    }
    if(ignoreUnsupportedSObjects){
        urlEnding.append(`&ignoreUnsupportedSObjects=${ignoreUnsupportedSObjects}`);
    }
    if(limit){
        urlEnding.append(`&limit=${limit}`);
    }
    if(networkId){
        urlEnding.append(`&networkId=${networkId}`);
    }
    if(topicId){
        urlEnding.append(`&topicId=${topicId}`);
    }
    if(type){
        urlEnding.append(`&type=${type}`);
    }
    if(userId){
        urlEnding.append(`&userId=${userId}`);
    }
    if(useSearchScope){
        urlEnding.append(`&useSearchScope=${useSearchScope}`);
    }
    if(wheretype){
        urlEnding.append(`&where=${where}`);
    }

    
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestions" ,urlEnding, instance , accessToken);
  
}

