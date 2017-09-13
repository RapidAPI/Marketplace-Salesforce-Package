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
app.post(`/api/${PACKAGE_NAME}/createSObject`,require ('./blocks/createSObject.js').createSObject);
app.post(`/api/${PACKAGE_NAME}/getSObject`,require ('./blocks/getSObject.js').getSObject);
app.post(`/api/${PACKAGE_NAME}/describeSingleObject`,require ('./blocks/describeSingleObject.js').describe);
app.post(`/api/${PACKAGE_NAME}/getObjectsDeletedRecords`,require ('./blocks/getObjectsDeletedRecords.js').getDeleted);
app.post(`/api/${PACKAGE_NAME}/getObjectsUpdatedRecords`,require ('./blocks/getObjectsUpdatedRecords.js').getUpdated);
app.post(`/api/${PACKAGE_NAME}/getObjectsNamedLayouts`,require ('./blocks/getObjectsNamedLayouts.js').getObjectsNamedLayouts);
app.post(`/api/${PACKAGE_NAME}/getObjectRows`,require ('./blocks/getObjectRows.js').getObjectRows);
app.post(`/api/${PACKAGE_NAME}/deleteObjectRows`,require ('./blocks/deleteObjectRows.js').deleteObjectRows);
//TODO: add the Externalid endpoint(get,post,delete,patch,head)
app.post(`/api/${PACKAGE_NAME}/getApprovalLayouts`,require ('./blocks/getApprovalLayouts.js').getApprovalLayouts);
app.post(`/api/${PACKAGE_NAME}/getCompactLayouts`,require ('./blocks/getCompactLayouts.js').getCompactLayouts);
app.post(`/api/${PACKAGE_NAME}/describeLayouts`,require ('./blocks/describeLayouts.js').describeLayouts);
app.post(`/api/${PACKAGE_NAME}/getPlatformAction`,require ('./blocks/getPlatformAction.js').getPlatformAction);
app.post(`/api/${PACKAGE_NAME}/getObjectsQuickActions`,require ('./blocks/getObjectsQuickActions.js').getObjectsQuickActions);
app.post(`/api/${PACKAGE_NAME}/getObjectsQuickActionsDescriptive`,require ('./blocks/getObjectsQuickActionsDescriptive.js').getObjectsQuickActionsDescriptive);
app.post(`/api/${PACKAGE_NAME}/getObjectsQuickActionsdefaultValues`,require ('./blocks/getObjectsQuickActionsdefaultValues.js').getObjectsQuickActionsdefaultValues);
app.post(`/api/${PACKAGE_NAME}/POSTObjectsQuickActions`,require ('./blocks/POSTObjectsQuickActions.js').POSTObjectsQuickActions);




/** START LISTENING **/
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(PORT);
    }
});
