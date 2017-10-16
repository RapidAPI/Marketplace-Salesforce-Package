 
module.exports = (req , res  , template) =>{

    const {args : {sObjectName ,language  ,articleTypes  , description , subject 
        ,categories ,limit , publishStatus , topics , validationStatus, instance , accessToken}} = req.body;
        let urlParams = `?language=${language}`;
        if(articleTypes){
            urlParams = urlParams.concat(`&articleTypes=${articleTypes}`);
        }   
        if(description){
            urlParams = urlParams.concat(`&description=${description}`);
        }
        if(subject){
            urlParams =  urlParams.concat(`&subject=${subject}`);
        }
        if(categories){
            urlParams = urlParams.concat(`&categories=${categories}`);
        }
        if(limit){
            urlParams = urlParams.concat(`&limit=${limit}`);
        }
        if(publishStatus){
            urlParams = urlParams.concat(`&publishStatus=${publishStatus}`);
        }
        if(topics){
            urlParams = urlParams.concat(`&topics=${topics}`);
        }
        if(validationStatus){
            urlParams = urlParams.concat(`&validationStatus=${validationStatus}`);
        }
        
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    
    return template (req, res, `sobjects/${sObjectName}/suggestedArticles`,urlParams ,instance , accessToken);
}