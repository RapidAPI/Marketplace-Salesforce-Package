var tamplate = require('../Templates/GETTemplate');

module.exports.getRelevantItems = (req , res) =>{
 
    const {args :lastUpdatedIdsObjects, sobject_lastUpdatedId	, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)

    if(sObjects){
        if(sobject_lastUpdatedId){
            return tamplate(req, res, `sobjects/relevantItems`, `?sObjects=${sObjects}&sobject.lastUpdatedId=${sobject_lastUpdatedId}`,instance , accessToken);
            
        }
        return tamplate(req, res, `sobjects/relevantItems`, `?sObjects=${sObjects}`,instance , accessToken);
    }
    else{
        if(lastUpdatedId){
            return tamplate(req, res, `recent`,`?lastUpdatedId=${lastUpdatedId}` ,instance , accessToken);
            
        }
        return tamplate(req, res, `recent`,null ,instance , accessToken);
    }
}