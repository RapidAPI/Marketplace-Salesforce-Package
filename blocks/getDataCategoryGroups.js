var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.getDataCategoryGroups = (req , res) =>{
   
    const {args: sObjectName,topCategoriesOnly  ,instance, accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(topCategoriesOnly){
        return tamplate(req, res, `/support/dataCategoryGroups`,`?sObjectName=${sObjectName}&topCategoriesOnly=${topCategoriesOnly}`, instance, accessToken);
    }
    else{
        return tamplate(req, res, `/support/dataCategoryGroups`,`?sObjectName=${sObjectName}`, instance, accessToken);
    }
    
}