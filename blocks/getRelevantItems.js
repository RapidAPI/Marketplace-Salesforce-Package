 

module.exports = (req , res  , template) =>{
 
    const {args :{sObjects ,lastUpdatedId, sobject_lastUpdatedId	, instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)

    if(sObjects){
        if(sobject_lastUpdatedId){
            return template (req, res, `sobjects/relevantItems`, `sObjects=${sObjects}&sobject.lastUpdatedId=${sobject_lastUpdatedId}`,instance , accessToken);
            
        }
        return template (req, res, `sobjects/relevantItems`, `sObjects=${sObjects}`,instance , accessToken);
    }
    else{
        if(lastUpdatedId){
            return template (req, res, `recent`,`lastUpdatedId=${lastUpdatedId}` ,instance , accessToken);
            
        }
        return template (req, res, `recent`,null ,instance , accessToken);
    }
}