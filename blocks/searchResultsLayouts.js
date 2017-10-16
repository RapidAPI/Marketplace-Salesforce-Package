
 

module.exports = (req , res  , template) =>{
    const {args : {query, instance , accessToken}} = req.body;    
     
        //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res , `search/layout` ,`q=${query}`, instance , accessToken);
  
}
