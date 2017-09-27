var tamplate = require('../Templates/GETTemplate');
module.exports.getDataCategoryDetail = (req , res) =>{

    const {args : group, category, sObjectName, instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `/support/dataCategoryGroups/${group}/dataCategories/${category}`,urlEnding ,instance , accessToken)};
