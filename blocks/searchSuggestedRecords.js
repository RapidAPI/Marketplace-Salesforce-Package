
 

module.exports = (req , res  , template) =>{
    const {args :{fields, groupId, ignoreUnsupportedSObjects, limit, networkId, query, sObject,
    topicId, type, userId, useSearchScope, where, instance , accessToken}} = req.body;    
    let urlParams = `q=${query}&sobject=${sObject}`
    if(fields){
        urlParams =  urlParams.concat(`${fields}`);
    }
    if(groupId){
        urlParams = urlParams.concat(`&groupId=${groupId}`);
    }
    if(ignoreUnsupportedSObjects){
        urlParams = urlParams.concat(`&ignoreUnsupportedSObjects=${ignoreUnsupportedSObjects}`);
    }
    if(limit){
        urlParams = urlParams.concat(`&limit=${limit}`);
    }
    if(networkId){
        urlParams = urlParams.concat(`&networkId=${networkId}`);
    }
    if(topicId){
        urlParams =  urlParams.concat(`&topicId=${topicId}`);
    }
    if(type){
        urlParams = urlParams.concat(`&type=${type}`);
    }
    if(userId){
        urlParams = urlParams.concat(`&userId=${userId}`);
    }
    if(useSearchScope){
        urlParams = urlParams.concat(`&useSearchScope=${useSearchScope}`);
    }
    if(where){
        urlParams =  urlParams.concat(`&where=${where}`);
    }

    
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , "search/suggestions" ,urlParams, instance , accessToken);
  
}

