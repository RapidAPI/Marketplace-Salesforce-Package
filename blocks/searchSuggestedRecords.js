
 

module.exports = (req , res  , template) =>{
    const {args :{fields, groupId, ignoreUnsupportedSObjects, limit, networkId, query, sobject,
    topicId, type, userId, useSearchScope, where, instance , accessToken}} = req.body;    
    let urlParams = `q=${query}&sobject=${sobject}`
    if(fields){
        urlParams =  urlParams.append(`${fields}`);
    }
    if(groupId){
        urlParams = urlParams.append(`&groupId=${groupId}`);
    }
    if(ignoreUnsupportedSObjects){
        urlParams = urlParams.append(`&ignoreUnsupportedSObjects=${ignoreUnsupportedSObjects}`);
    }
    if(limit){
        urlParams = urlParams.append(`&limit=${limit}`);
    }
    if(networkId){
        urlParams = urlParams.append(`&networkId=${networkId}`);
    }
    if(topicId){
        urlParams =  urlParams.append(`&topicId=${topicId}`);
    }
    if(type){
        urlParams = urlParams.append(`&type=${type}`);
    }
    if(userId){
        urlParams = urlParams.append(`&userId=${userId}`);
    }
    if(useSearchScope){
        urlParams = urlParams.append(`&useSearchScope=${useSearchScope}`);
    }
    if(wheretype){
        urlParams =  urlParams.append(`&where=${where}`);
    }

    
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestions" ,urlParams, instance , accessToken);
  
}

