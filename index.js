"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/** SET UP **/
//If ran in production - use enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;
//The package name
global.PACKAGE_NAME = "SalesForce";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/
//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
app.get(`/api/${PACKAGE_NAME}`, require('./metadata.js').do);

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block

app.post(`/api/${PACKAGE_NAME}/getAccessToken`, require('./blocks/getAccessToken.js').getAccessToken);

app.post(`/api/${PACKAGE_NAME}/getAllVersions`, require('./blocks/getAllVersions.js').versions);
app.post(`/api/${PACKAGE_NAME}/getResourcesByVersion`,require ('./blocks/getResourcesByVersion.js').getResourcesByVersion);
app.post(`/api/${PACKAGE_NAME}/getLimits`,require ('./blocks/getLimits.js').limits);
app.post(`/api/${PACKAGE_NAME}/describeGlobal`,require ('./blocks/describeGlobal.js').describeGlobal);
app.post(`/api/${PACKAGE_NAME}/getAccountObjectMetadata`,require ('./blocks/getAccountObjectMetadata.js').getAccountObjectMetadata);
app.post(`/api/${PACKAGE_NAME}/createSObject`,require ('./blocks/createSObject.js').createSObject);
app.post(`/api/${PACKAGE_NAME}/getSObject`,require ('./blocks/getSObject.js').getSObject);
app.post(`/api/${PACKAGE_NAME}/describeSingleObject`,require ('./blocks/describeSingleObject.js').describe);
app.post(`/api/${PACKAGE_NAME}/getObjectsDeletedRecords`,require ('./blocks/getObjectsDeletedRecords.js').getDeleted);
app.post(`/api/${PACKAGE_NAME}/getObjectsUpdatedRecords`,require ('./blocks/getObjectsUpdatedRecords.js').getUpdated);
app.post(`/api/${PACKAGE_NAME}/getObjectsNamedLayouts`,require ('./blocks/getObjectsNamedLayouts.js').getObjectsNamedLayouts);
app.post(`/api/${PACKAGE_NAME}/getObjectRows`,require ('./blocks/getObjectRows.js').getObjectRows);
app.post(`/api/${PACKAGE_NAME}/deleteObjectRows`,require ('./blocks/deleteObjectRows.js').deleteObjectRows);
app.post(`/api/${PACKAGE_NAME}/postObjectRowsByExternalId`,require ('./blocks/postObjectRowsByExternalId.js').postObjectRowsByExternalId);
app.post(`/api/${PACKAGE_NAME}/getObjectRowsByExternalId`,require ('./blocks/getObjectRowsByExternalId.js').getObjectRowsByExternalId);
app.post(`/api/${PACKAGE_NAME}/updateObjectRowsByExternalId`,require ('./blocks/updateObjectRowsByExternalId.js').updateObjectRowsByExternalId);
app.post(`/api/${PACKAGE_NAME}/deleteObjectRowsByExternalId`,require ('./blocks/deleteObjectRowsByExternalId.js').deleteObjectRowsByExternalId);
app.post(`/api/${PACKAGE_NAME}/getApprovalLayouts`,require ('./blocks/getApprovalLayouts.js').getApprovalLayouts);
app.post(`/api/${PACKAGE_NAME}/getCompactLayouts`,require ('./blocks/getCompactLayouts.js').getCompactLayouts);
app.post(`/api/${PACKAGE_NAME}/describeLayouts`,require ('./blocks/describeLayouts.js').describeLayouts);
app.post(`/api/${PACKAGE_NAME}/getPlatformAction`,require ('./blocks/getPlatformAction.js').getPlatformAction);
app.post(`/api/${PACKAGE_NAME}/getObjectsQuickActions`,require ('./blocks/getObjectsQuickActions.js').getObjectsQuickActions);
app.post(`/api/${PACKAGE_NAME}/getObjectsQuickActionsDescriptive`,require ('./blocks/getObjectsQuickActionsDescriptive.js').getObjectsQuickActionsDescriptive);
app.post(`/api/${PACKAGE_NAME}/getObjectsQuickActionsdefaultValues`,require ('./blocks/getObjectsQuickActionsdefaultValues.js').getObjectsQuickActionsdefaultValues);
app.post(`/api/${PACKAGE_NAME}/getObjectsActionsDefaultValuesById`,require ('./blocks/getObjectsActionsDefaultValuesById.js').getObjectsActionsDefaultValuesById);
app.post(`/api/${PACKAGE_NAME}/postObjectsQuickActions`,require ('./blocks/postObjectsQuickActions.js').postObjectsQuickActions);
app.post(`/api/${PACKAGE_NAME}/getRecordsByRelationship`,require ('./blocks/getRecordsByRelationship.js').getRecordsByRelationship);
app.post(`/api/${PACKAGE_NAME}/deleteRecordByRelationship`,require ('./blocks/deleteRecordByRelationship.js').deleteRecordByRelationship);
app.post(`/api/${PACKAGE_NAME}/updateRecordByRelationship`,require ('./blocks/updateRecordByRelationship.js').updateRecordByRelationship);
app.post(`/api/${PACKAGE_NAME}/getSugestedArticles`,require ('./blocks/getSugestedArticles.js').getSugestedArticles);
app.post(`/api/${PACKAGE_NAME}/getSuggestedArticlesByRecordId`,require ('./blocks/getSuggestedArticlesByRecordId.js').getSuggestedArticlesByRecordId);
app.post(`/api/${PACKAGE_NAME}/getUserPasswordInformation`,require ('./blocks/getUserPasswordInformation.js').getUserPasswordInformation);
app.post(`/api/${PACKAGE_NAME}/getPlatformEventByName`,require ('./blocks/getPlatformEventByName.js').getPlatformEventByName);
app.post(`/api/${PACKAGE_NAME}/getPlatformEventBySchemaId`,require ('./blocks/getPlatformEventBySchemaId.js').getPlatformEventBySchemaId);
app.post(`/api/${PACKAGE_NAME}/getSalesforceAppDropDownItems`,require ('./blocks/getSalesforceAppDropDownItems.js').getSalesforceAppDropDownItems);
app.post(`/api/${PACKAGE_NAME}/getSalesforceNavMenuItems`,require ('./blocks/getSalesforceNavMenuItems.js').getSalesforceNavMenuItems);
app.post(`/api/${PACKAGE_NAME}/getCompactLayouts`,require ('./blocks/getCompactLayouts.js').getCompactLayouts);
app.post(`/api/${PACKAGE_NAME}/getListActionsTypes`,require ('./blocks/getListActionsTypes.js').getListActionsTypes);
app.post(`/api/${PACKAGE_NAME}/postToStandardAction`,require ('./blocks/postToStandardAction.js').postToStandardAction);
app.post(`/api/${PACKAGE_NAME}/postToCustomAction`,require ('./blocks/postToCustomAction.js').postToCustomAction);
app.post(`/api/${PACKAGE_NAME}/getStandardActions`,require ('./blocks/getStandardActions.js').getStandardActions);
app.post(`/api/${PACKAGE_NAME}/getCustomActions`,require ('./blocks/getCustomActions.js').getCustomActions);
app.post(`/api/${PACKAGE_NAME}/describeListView`,require ('./blocks/describeListView.js').describeListView);
app.post(`/api/${PACKAGE_NAME}/getListViewResults`,require ('./blocks/getListViewResults.js').getListViewResults);
app.post(`/api/${PACKAGE_NAME}/getListViews`,require ('./blocks/getListViews.js').getListViews);
app.post(`/api/${PACKAGE_NAME}/getDataCategoryGroups`,require ('./blocks/getDataCategoryGroups.js').getDataCategoryGroups);
app.post(`/api/${PACKAGE_NAME}/getDataCategoryDetail`,require ('./blocks/getDataCategoryDetail.js').getDataCategoryDetail);
app.post(`/api/${PACKAGE_NAME}/parameterizedSearch`,require ('./blocks/parameterizedSearch.js').parameterizedSearch);
app.post(`/api/${PACKAGE_NAME}/getProcessApprovals`,require ('./blocks/getProcessApprovals.js').getProcessApprovals);
app.post(`/api/${PACKAGE_NAME}/submitRecordForApproval`,require ('./blocks/submitRecordForApproval.js').submitRecordForApproval);
app.post(`/api/${PACKAGE_NAME}/getAllWorkflowRules`,require ('./blocks/getAllWorkflowRules.js').getAllWorkflowRules);
app.post(`/api/${PACKAGE_NAME}/getStandardActions`,require ('./blocks/getStandardActions.js').getStandardActions);
app.post(`/api/${PACKAGE_NAME}/triggerProcessRules`,require ('./blocks/triggerProcessRules.js').triggerProcessRules);
app.post(`/api/${PACKAGE_NAME}/Query`,require ('./blocks/Query.js').Query);
app.post(`/api/${PACKAGE_NAME}/explainQuery`,require ('./blocks/explainQuery.js').explainQuery);
app.post(`/api/${PACKAGE_NAME}/additionalQueryResults`,require ('./blocks/additionalQueryResults.js').additionalQueryResults);
app.post(`/api/${PACKAGE_NAME}/queryAll`,require ('./blocks/queryAll.js').queryAll);
app.post(`/api/${PACKAGE_NAME}/additionalQueryAll`,require ('./blocks/additionalQueryAll.js').additionalQueryAll);
app.post(`/api/${PACKAGE_NAME}/getQuickActions`,require ('./blocks/getQuickActions.js').getQuickActions);
app.post(`/api/${PACKAGE_NAME}/postQuickAction`,require ('./blocks/postQuickAction.js').postQuickAction);
app.post(`/api/${PACKAGE_NAME}/getRecentListViews`,require ('./blocks/getRecentListViews.js').getRecentListViews);
app.post(`/api/${PACKAGE_NAME}/getRecentlyViewedItems`,require ('./blocks/getRecentlyViewedItems.js').getRecentlyViewedItems);
app.post(`/api/${PACKAGE_NAME}/getRecordCount`,require ('./blocks/getRecordCount.js').getRecordCount);
app.post(`/api/${PACKAGE_NAME}/getRelevantItems`,require ('./blocks/getRelevantItems.js').getRelevantItems);
app.post(`/api/${PACKAGE_NAME}/getKnowledgeLanguageSettings`,require ('./blocks/getKnowledgeLanguageSettings.js').getKnowledgeLanguageSettings);
app.post(`/api/${PACKAGE_NAME}/search`,require ('./blocks/search.js').search);
app.post(`/api/${PACKAGE_NAME}/searchScopeOrder`,require ('./blocks/searchScopeOrder.js').searchScopeOrder);
app.post(`/api/${PACKAGE_NAME}/searchResultsLayouts`,require ('./blocks/searchResultsLayouts.js').searchResultsLayouts);
app.post(`/api/${PACKAGE_NAME}/searchSuggestedRecords`,require ('./blocks/searchResultsLayouts.js').searchResultsLayouts);
app.post(`/api/${PACKAGE_NAME}/searchSuggestedQueries`,require ('./blocks/searchResultsLayouts.js').searchResultsLayouts);
app.post(`/api/${PACKAGE_NAME}/searchSuggestedArticleTitleMatches`,require ('./blocks/searchResultsLayouts.js').searchResultsLayouts);
app.post(`/api/${PACKAGE_NAME}/getTabs`,require ('./blocks/getTabs.js').getTabs);
app.post(`/api/${PACKAGE_NAME}/getThemes`,require ('./blocks/getThemes.js').getThemes);




















/** START LISTENING **/
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(PORT);
    }
});
