
 

module.exports = (req , res  , template) =>{

    const {args : {sObjectName, start, end , instance , accessToken} } = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `sobjects/${sObjectName}/updated`,`start=${start}&end=${end}`,instance , accessToken);
}