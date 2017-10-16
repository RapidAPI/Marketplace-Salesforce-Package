 
module.exports = (req , res  , template) =>{

    const {args : {query,channel ,subject ,categories , queryMethod,
         sort, order, pageSize,pageNumber , instance , accessToken}} = req.body;
        let urlParams = "";
        if(query){
            urlParams = urlParams.concat(`&query=${query}`);
        }   
        if(channel){
            urlParams =  urlParams.concat(`&channel=${channel}`);
        }
        if(subject){
            urlParams =  urlParams.concat(`&subject=${subject}`);
        }
        if(categories){
            urlParams =  urlParams.concat(`&categories=${categories}`);
        }
        if(queryMethod){
            urlParams =  urlParams.concat(`&queryMethod=${queryMethod}`);
        }
        if(sort){
            urlParams = urlParams.concat(`&sort=${sort}`);
        }
        if(order){
            urlParams =  urlParams.concat(`&order=${order}`);
        }
        if(pageSize){
            urlParams = urlParams.concat(`&pageSize=${pageSize}`);
        }
        if(pageNumber){
            urlParams = urlParams.concat(`&pageNumber=${pageNumber}`);
        }
        urlParams =  urlParams.replace("&" , "");
        //template(req,res,urlEnding,urlParams , instance , accessToken)
    return template (req, res, `support/knowledgeArticles`,urlParams ,instance , accessToken);
}