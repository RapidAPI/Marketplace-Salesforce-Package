var tamplate = require('../Templates/GETTemplate');

module.exports.getPlatformEventBySchemaId = (req , res) =>{
 
    const {args : schemaId ,instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `event/eventSchema/${schemaId}`, null,instance , accessToken);
        
}