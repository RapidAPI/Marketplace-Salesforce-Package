 

module.exports = (req , res  , template) =>{
 
    const {args : {schemaId ,instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `event/eventSchema/${schemaId}`, null,instance , accessToken);
        
}