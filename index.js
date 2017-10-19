"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/* object mapping for templates */
const templates = {
    "GET" :  require('./Templates/GETTemplate'),
    "POST" : require('./Templates/POSTTemplate'),
    "DELETE" : require('./Templates/DELETETemplate'),
    "PATCH" : require('./Templates/PATCHTemplate')
};

const jsonMappingRequest = require("./endpointToReqTypeMapping.json")


/** SET UP **/
//If ran in production - suse enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
global.PACKAGE_NAME = "Salesforce";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/
//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
app.get(`/api/${PACKAGE_NAME}`, require('./metadata.js').do);

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block
try{
    Object.keys(jsonMappingRequest).forEach(api => {
        let methodType = jsonMappingRequest[api];
        let template = templates[methodType];
        app.post(`/api/${PACKAGE_NAME}/${api}`,(req,res) =>  require(`./blocks/${api}.js`)(req , res ,template));
    })
}
catch(e){

}



/** START LISTENING **/
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(PORT);
    }
});
