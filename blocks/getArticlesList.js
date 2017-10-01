 
module.exports = (req , res  , template) =>{

    const {args : {query,channel ,subject ,categories , queryMethod,
         sort, order, pageSize,pageNumber , instance , accessToken}} = req.body;
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

        //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `/support/knowledgeArticles`,urlEnding ,instance , accessToken);
}