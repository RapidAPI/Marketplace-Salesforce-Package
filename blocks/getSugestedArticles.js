 
module.exports = (req , res  , template) =>{

    const {args : {sObjectName ,language  ,articleTypes  , description , subject 
        ,categories ,limit , publishStatus , topics , validationStatus, instance , accessToken}} = req.body;
        let urlEnding = `?language=${language}`;
        if(articleTypes){
            urlEnding.concat(`&articleTypes=${articleTypes}`);
        }   
        if(description){
            urlEnding.concat(`&description=${description}`);
        }
        if(subject){
            urlEnding.concat(`&subject=${subject}`);
        }
        if(categories){
            urlEnding.concat(`&categories=${categories}`);
        }
        if(limit){
            urlEnding.concat(`&limit=${limit}`);
        }
        if(publishStatus){
            urlEnding.concat(`&publishStatus=${publishStatus}`);
        }
        if(topics){
            urlEnding.concat(`&topics=${topics}`);
        }
        if(validationStatus){
            urlEnding.concat(`&validationStatus=${validationStatus}`);
        }

    //template(req,res,urlEnding,urlParams , instance , accessToken)
    
    return template (req, res, `sobjects/${sObjectName}/suggestedArticles/`,urlEnding ,instance , accessToken);
}