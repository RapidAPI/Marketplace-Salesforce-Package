var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.postObjectRowsByExternalId = (req , res) =>{

    const {args : sObjectName ,language  ,articleTypes  , description , subject 
        ,categories ,limit , publishStatus , topics , validationStatus, instance , token} = req.body;
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

    // tamplate(req ,res ,urlEnding ,urlParams)
    
    return tamplate(req, res, `sobjects/${sObjectName}/suggestedArticles/`,urlEnding ,instance , token);
}