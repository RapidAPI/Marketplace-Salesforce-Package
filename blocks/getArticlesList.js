var tamplate = require('../Templates/GETTemplate');
module.exports.getSugestedArticles = (req , res) =>{

    const {args : query,channel ,subject ,categories , queryMethod,
         sort, order, pageSize,pageNumber , instance , accessToken} = req.body;
        let urlEnding = "";
        if(query){
            urlEnding.concat(`&query=${query}`);
        }   
        if(channel){
            urlEnding.concat(`&channel=${channel}`);
        }
        if(subject){
            urlEnding.concat(`&subject=${subject}`);
        }
        if(categories){
            urlEnding.concat(`&categories=${categories}`);
        }
        if(queryMethod){
            urlEnding.concat(`&queryMethod=${queryMethod}`);
        }
        if(sort){
            urlEnding.concat(`&sort=${sort}`);
        }
        if(order){
            urlEnding.concat(`&order=${order}`);
        }
        if(pageSize){
            urlEnding.concat(`&pageSize=${pageSize}`);
        }
        if(pageNumber){
            urlEnding.concat(`&pageNumber=${pageNumber}`);
        }

    // tamplate(req ,res ,urlEnding ,urlParams)
    
    return tamplate(req, res, `/support/knowledgeArticles`,urlEnding ,instance , accessToken);
}