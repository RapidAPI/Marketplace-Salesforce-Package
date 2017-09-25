var tamplate = require('../Templates/GETTemplate');

module.exports.getListActionsTypes = (req , res) =>{
 
    const {args : instance , accessToken} = req.body;
    // tamplate(req ,res ,urlEnding ,urlParams)
    return tamplate(req, res, `actions`, null,instance , accessToken);
        

}