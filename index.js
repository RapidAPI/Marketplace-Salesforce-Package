"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/** SET UP **/
//If ran in production - use enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
global.PACKAGE_NAME = "salesforce";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/
//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
app.get(`/api/${PACKAGE_NAME}`, require('./metadata.js').do);

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block
app.post(`/api/${PACKAGE_NAME}/getAllVersions`, require('./blocks/getAllVersions.js').versions);
app.post(`/api/${PACKAGE_NAME}/getResourcesByVersion`,require ('./blocks/getResourcesByVersion.js').getResourcesByVersion);
app.post(`/api/${PACKAGE_NAME}/getLimits`,require ('./blocks/getLimits.js').limits);
app.post(`/api/${PACKAGE_NAME}/describeGlobal`,require ('./blocks/describeGlobal.js').describeGlobal);
app.post(`/api/${PACKAGE_NAME}/createAccountObject`,require ('./blocks/createAccountObject.js').createAcountObject);
app.post(`/api/${PACKAGE_NAME}/getAccountObject`,require ('./blocks/getAccountObject.js').getAccountObject);




/** START LISTENING **/
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(PORT);
    }
});
