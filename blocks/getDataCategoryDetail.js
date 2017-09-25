var tamplate = require('../Templates/GETTemplate');
//TODO: check this
module.exports.getListViewResults = (req , res) =>{
   
    const {args: sObjectName, group ,category ,instance, accessToken } = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    if(sObjectName){
        return tamplate(req, res, `/support/dataCategoryGroups/${group}/dataCategories/${category}`,`?sObjectName=${sObjectName}`, instance, accessToken);
    }
    else{
        return tamplate(req, res, `/support/dataCategoryGroups/${group}/dataCategories/${category}`,null, instance, accessToken);        
    }
    
}
