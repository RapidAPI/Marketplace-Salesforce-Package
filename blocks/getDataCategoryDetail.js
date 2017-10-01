 
module.exports = (req , res  , template) =>{

    const {args : {group, category, sObjectName, instance , accessToken}} = req.body;
    //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `/support/dataCategoryGroups/${group}/dataCategories/${category}`,urlEnding ,instance , accessToken)};
