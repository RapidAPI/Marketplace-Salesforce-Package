"use strict";

module.exports.do = function(req, res){
    res.status(200).send({
        "package": 'salesforce',
        "tagline": "interact with salseforce",
        "description": "salesforce provides companies with an interface for case management and task management, and a system for automatically routing and escalating important events.",
        "image": "https://logo.clearbit.com/salesforce.com", 
        "repo": "https://github.com/RapidAPI/Marketplace-Salesforce-Package",
        "keywords": ["SaaS", "support", "cloud","API"],
        "accounts": {
            "domain": "salesforce.com",
            "credentials": [
                "instance",
                "client_id",
                "client_secret",
                "username",
                "password"
            ]
        },
        'blocks'      : [{
            "name":"getAccessToken",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"client_id", type:"credentials", info:"client id on salesforce.", required: true},
                {name:"client_secret", type:"credentials", info:"secret key on salesforce.", required: true},
                {name:"username", type:"credentials", info:"username on salesforce.", required: true},
                {name:"password", type:"credentials", info:"password on salesforce.", required: true},
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root."
        },{
            "name":"getAllVersions",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root."
        },
        {
            "name":"getResourcesByVersion",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Lists available resources for the specified API version, including resource name and URI."
        },
        {
            "name":"getLimits",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Lists information about limits in your org. This resource is available in REST API version 29.0 and later for API users with the View Setup and Configuration permission."
        },
        {
            "name":"describeGlobal",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"modifiedSince", type:"string", info:"query only colums moldified within the given range", required: false}                
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Lists the available objects and their metadata for your organization’s data. In addition, it provides the organization encoding, as well as the maximum batch size permitted in queries."
        },
        {
            "name":"getAccountObjectMetadata",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Retrieve the metadata for the Account object using the GET method."
        },
        {
            "name":"createSObject",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"Object name to create", required: true},
                {name:"inputs", type:"string", info:"json formated body for new object to be created", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Create a new Account object using the POST method"
        },
        {
            "name":"describeSingleObject",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"modifiedSince", type:"string", info:"query only colums moldified within the given range", required: false}                                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Completely describes the individual metadata at all levels for the specified object."
        },
        {
            "name":"getObjectsDeletedRecords",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"start", type:"string", info:"Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data.", required: true},
                {name:"end", type:"string", info:" Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. ", required: true}  
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Retrieves the list of individual records that have been deleted within the given timespan for the specified object."
        },       {
            "name":"getObjectsUpdatedRecords",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"start", type:"string", info:"Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data.", required: true},
                {name:"end", type:"string", info:" Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. ", required: true}                              
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object."
        },
        {
            "name":"getObjectsNamedLayouts",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"layoutName", type:"string", info:"the layout for for the returned query", required: true},
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Retrieves information about alternate named layouts for a given object."
        },
        {
            "name":"getObjectRows",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"recordId", type:"string", info:"the record id to fetch", required: true},
                {name:"fields", type:"string", info:"Optional list of fields used to return values for.", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Accesses records based on the specified object ID."
        },
        {
            "name":"deleteObjectRows",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"recordId", type:"string", info:"the record id to fetch", required: true},
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"DELETE method to delete records."
        },
        {
            "name":"updateObjectRows",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"recordId", type:"string", info:"the record id to fetch", required: true},
                {name:"fields", type:"string", info:"Optional list of fields used to return values for.", required: false}
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"PATCH method to update records."
        },
        {
            "name":"getObjectRowsByExternalId",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"fieldName", type:"string", info:"the  specified external ID field", required: true},
                {name:"fieldValue", type:"string", info:"the value for the object.", required: true}
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Gets records based on the value of a specified external ID field."
        },
        {
            "name":"deleteObjectRowsByExternalId",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"fieldName", type:"string", info:"the  specified external ID field", required: true},
                {name:"fieldValue", type:"string", info:"the value for the object.", required: true}
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"strong textDelete object records based on the value of a specified external ID field."
        },
        {
            "name":"updateObjectRowsByExternalId",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"fieldName", type:"string", info:"the  specified external ID field", required: true},
                {name:"fieldValue", type:"string", info:"the value for the object.", required: true}
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Updates records based on the value of a specified external ID field."
        },
        {
            "name":"postObjectRowsByExternalId",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"fieldName", type:"string", info:"the specified external ID field", required: true},
                {name:"fieldValue", type:"string", info:"the value for the object.", required: true},
                {name:"jsonbody", type:"string", info:"json formated body for new object to be created", required: true}
                
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"adds records based on the value of a specified external ID field."
        },
        {
            "name":"getApprovalLayouts",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true},                
                {name:"approvalProcessName", type:"string", info:"the specified approval Process Name field", required: false}       
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of approval layouts for a specified object. Specify a particular approval process name to limit the return value to one specific approval layout."
        },
        {
            "name":"getCompactLayouts",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: true}               
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of compact layouts for a specific object."
        },
        {
            "name":"describeLayouts",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},  
                {name:"recordTypeId", type:"string", info:"the id for the record type", required: false},  
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of layouts and descriptions. The list of fields and the layout name are returned."
        },
        {
            "name":"getPlatformAction",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"version", type:"string", info:"the api version used", required: false},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns the description of the PlatformAction."
        },
        {
            "name":"getObjectsQuickActions",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of specific object’s actions as well as global actions."
        },
        
        {
            "name":"postObjectsQuickActions",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: false},
                {name:"jsonbody", type:"string", info:"json formated body for new object to be created", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Return a specific object's action.15"
        },
        {
            "name":"getObjectsActionsDefaultValues",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Return a specific action’s descriptive detail"
        },
        {
            "name":"getObjectsActionsDefaultValuesById",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"contextId", type:"string", info:"the required action to return", required: true}, 
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Return a specific action’s descriptive detail"
        },
        {
            "name":"getRecordsByRelationship",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"recordId", type:"string", info:"the record id to fetch", required: true},
                {name:"relationshipFieldName", type:"string", info:"the name of relationship Field to fetch", required: true},
                {name:"fields", type:"string", info:"Optional list of fields used to return values for.", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Return a specific action’s descriptive detail"
        },
        {
            "name":"deleteRecordByRelationship",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"contextId", type:"string", info:"the required action to return", required: true}, 
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Deletes record by traversing object relationships via friendly URLs. "
        },
        {
            "name":"updateRecordByRelationship",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"contextId", type:"string", info:"the required action to return", required: true}, 
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Updates record by traversing object relationships via friendly URLs."
        },
        {
            "name":"getSuggestedArticlesByRecordId",
            "args":[
                
                {name:"language", type:"credentials", info:"Language that the article is written in.", required: true},                
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"sObjectName", type:"string", info:"the SObject required", required: false},                  
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"description", type:"string", info:"Text of the description. Valid only for new records without an existing ID and required if subject is null.", required: false},
                {name:"subject", type:"string", info:"Text of the subject", required: false},                 {name:"subject", type:"string", info:"Text of the subject", required: false}, 
                {name:"articleTypes", type:"string", info:"Three-character ID prefixes indicating the desired article types", required: false}, 
                {name:"categories", type:"string", info:"The name of the data category group and the data category API name (not category title) for desired articles.", required: false}, 
                {name:"limit", type:"string", info:"Specifies the maximum number of suggested articles to return.", required: false}, 
                {name:"publishStatus", type:"string", info:". The article’s publication status.", required: false}, 
                {name:"topics", type:"string", info:"The topic of returned articles. ", required: false}, 
                {name:"validationStatus", type:"string", info:"The validation status of returned articles. ", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of suggested Salesforce Knowledge articles for a case, work order, or work order line item."
        },
        {
            "name":"getSugestedArticles",
            "args":[
                
                {name:"language", type:"credentials", info:"Language that the article is written in.", required: true},                
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"description", type:"string", info:"Text of the description. Valid only for new records without an existing ID and required if subject is null.", required: false},
                {name:"subject", type:"string", info:"Text of the subject", required: false},                 {name:"subject", type:"string", info:"Text of the subject", required: false}, 
                {name:"articleTypes", type:"string", info:"Three-character ID prefixes indicating the desired article types", required: false}, 
                {name:"categories", type:"string", info:"The name of the data category group and the data category API name (not category title) for desired articles.", required: false}, 
                {name:"limit", type:"string", info:"Specifies the maximum number of suggested articles to return.", required: false}, 
                {name:"publishStatus", type:"string", info:". The article’s publication status.", required: false}, 
                {name:"topics", type:"string", info:"The topic of returned articles. ", required: false}, 
                {name:"validationStatus", type:"string", info:"The validation status of returned articles. ", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of suggested Salesforce Knowledge articles for a case, work order, or work order line item."
        },
        {
            "name":"getUserPasswordInformation",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"userId", type:"string", info:"the user id to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" get information about a user password"
        },        {
            "name":"setUserPassword",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"userId", type:"string", info:"the user id to fetch", required: true},
                {name:"newPassword", type:"string", info:"the user id to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Sets user password."
        },        {
            "name":"resetUserPassword",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"userId", type:"string", info:"the user id to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Resets the user password."
        },
        {
            "name":"getPlatformEventByName",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"platformEventName", type:"string", info:"the platform event name to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Gets the definition of a platform event in JSON format for a given event name."
        },
        {
            "name":"getPlatformEventBySchemaId",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"schemaId", type:"string", info:"the platform event id to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Gets the definition of a platform event in JSON format for a given schema ID."
        },
        {
            "name":"getSalesforceAppDropDownItems",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of items in the Salesforce app drop-down menu."
        },
        {
            "name":"getSalesforceNavMenuItems",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of items in the Salesforce1 navigation menu."
        },
        {
            "name":"getCompactLayouts",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"objects", type:"string", info:"A comma-delimited list of objects. The primary compact layout for each object in this list will be returned in the response of this resource.                ", required: true},
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of compact layouts for multiple objects."
        },
        {
            "name":"getListActionsTypes",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Retrieve a list of general action types for the current organization."
        },
        {
            "name":"postToStandardAction",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"inputs", type:"string", info:"A JSON object{ \"inputs\": [ \"field\": \"value\" ] }", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Make a post request to an standard action type. "
        },
        {
            "name":"postToCustomAction",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"inputs", type:"string", info:"A JSON object{ \"inputs\": [ \"field\": \"value\" ] }", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Post request to any custom action."
        },
        {
            "name":"getStandardActions",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get a list of all available standard actions."
        },
        {
            "name":"getCustomActions",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"actionName", type:"string", info:"the required action to return", required: true},
                {name:"userId", type:"string", info:"the user id to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Get a list of all available custom actions."
        },        
        {
            "name":"describeListView",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectType", type:"string", info:"the type of object", required: true},
                {name:"queryLocator", type:"string", info:"The children records can be accessed in the execute method of Batch Apex", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns detailed information about a list view, including the ID, the columns, and the SOQL query."
        },
         {
            "name":"getListViewResults",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectType", type:"string", info:"the type of object", required: true},
                {name:"listViewId", type:"string", info:"the view id to fetch", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Get a list of all available custom actions."
        },
         {
            "name":"getListViews",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectType", type:"string", info:"the type of object", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns the list of list views for the specified sObject, including the ID and other basic information about each list view."
        },
         {
            "name":"getDataCategoryGroups",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"KnowledgeArticleVersion only.... for now", required: true},
                {name:"topCategoriesOnly", type:"Boolean", info:"Boolean", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get data category groups that are visible to the current user."
        },
         {
            "name":"getDataCategoryDetail",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectName", type:"string", info:"KnowledgeArticleVersion only.... for now", required: true},
                {name:"group", type:"string", info:"the group to filter the data", required: true},
                {name:"category", type:"string", info:"data Categories", required: true}
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Get data category details and the child categories by a pgiven category."
        },
         {
            "name":"getArticlesList",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:" Performs an SOSL search. If the query string is null, empty, or not given, an SOQL query runs.", required: false},
                {name:"channel", type:"string", info:"Defaults to user’s context. For information on channel values, see Valid channel values.", required: false},
                {name:"categories", type:"string", info:"Map JSON format {“group1”:”category1”,”group2”:”category2”,...}", required: false},
                {name:"queryMethod", type:"string", info:"values are: AT, BELOW, ABOVE, ABOVE_OR_BELOW. Only valid when categories are specified, defaults to ABOVE_OR_BELOW.", required: false},
                {name:"sort", type:"string", info:"a sortable field name LastPublishedDate, CreatedDate, Title, ViewScore. Defaults to LastPublishedDate for query and relevance for search.", required: false},
                {name:"order", type:"string", info:"", required: false},
                {name:"pageSize", type:"string", info:"", required: false},
                {name:"pageNumber", type:"string", info:"", required: false}
                
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get a page of online articles for the given language and category through either search or query."
        },
         {
            "name":"getArticleDetails",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"articleId", type:"string", info:"article Id", required: true},
                {name:"channel", type:"string", info:"defaults to user’s context.", required: false},
                {name:"updateViewStat", type:"bolean", info:"boolean, defaults to true. If true, API updates the view count in the given channel as well as the total view count.", required: false},
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Get all article fields, accessible to the user."
        },
         {
            "name":"parameterizedSearch",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:"A search string that is properly URL-encoded", required: true},
                {name:"dataCategory", type:"string", info:"Single value. If an organization uses Salesforce Knowledge articles or answers, dataCategory filters all search results based on one data category.", required: false},
                {name:"division", type:"string", info:"ingle value. Filters search results based on the division field.", required: false},
                {name:"fields", type:"string", info:"Array of one or more fields to return in the response for each sobjects specified. At least one sobjects must be specified at the global level.", required: false},
                {name:"in", type:"string", info:"Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.", required: false},
                {name:"metadata", type:"string", info:"Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.", required: false},
                {name:"in", type:"string", info:"Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.", required: false},
                {name:"metadata", type:"string", info:"Specifies if metadata should be returned in the response. No metadata is returned by default. To include metadata in the response, use the LABELS value, which returns the display label for the fields returned in search results. ", required: false},
                {name:"netWorkIds", type:"string", info:"Filters search results by an array.A network ID represents the community ID.", required: false},
                {name:"offset", type:"string", info:"Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.", required: false},
                {name:"overallLimit", type:"string", info:"Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.", required: false},
                {name:"offset", type:"string", info:"Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.", required: false},
                {name:"overallLimit", type:"string", info:"Single value. The maximum number of results to return across all sobject parameters specified.The maximum overallLimit is 2000.", required: false},
                {name:"pricebookId", type:"string", info:"Single value. Filters product search results by a price book ID for only the Product2 object. The price book ID must be associated with the product that you’re searching for. For example, ?q=laptop&sobject=product2&pricebookId=01sxx0000002MffAAE", required: false},
                {name:"snippet", type:"string", info:"he target length (maximum number of snippet characters) to return in Salesforce Knowledge article, case, case comment, feed, feed comment, idea, and idea comment search results. The snippet parameter displays contextual excerpts and highlights the search term for each article in the search results. Snippet results are used to differentiate matches to the search term in article search results. The target length can be from 50 to 1000 characters.Snippet and highlights are generated from email, text, and text area (long and rich) fields. Snippets aren’t displayed for partially matching searches or if the user doesn’t have access to the field that contains the snippet. Snippets are only displayed when 20 or fewer results are returned on a page.", required: false},
                {name:"sobjects", type:"string", info:"	Objects to return in the response. Must contain valid object types. Use with the required parameters.", required: false},
                {name:"spellCorrection", type:"boolean", info:"	FSpecifies whether spell correction is enabled for a user’s search. When set to true, spell correction is enabled for searches that support spell correction. The default value is true.", required: false},
                {name:"updateTracking", type:"string", info:"Specifies a value of true to track keywords that are used in Salesforce Knowledge article searches only.If unspecified, the default value of false is applied.", required: false},
                {name:"updateViewStat", type:"string", info:"Specifies a value of true to update an article’s view statistics. Valid only for Salesforce Knowledge article searches.If unspecified, the default value of false is applied.", required: false}  
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Get a list of all available custom actions."
        },
         {
            "name":"submitRecordForApproval",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"approvalRequest", type:"string", info:"A JSON object", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Submit a particular record if that entity supports an approval process and one has already been defined. "
        },
         {
            "name":"getAllWorkflowRules",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Returns a list of all active workflow rules."
        },
         {
            "name":"triggerProcessRules",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"contextIds", type:"string", info:"the required action to return", required: true},
                {name:"userId", type:"string", info:"An array of contextIds as a JSON object in the request body", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Trigger process rules. All rules associated with the specified ID will be evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object."
        },
         {
            "name":"query",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:"the query to execute.", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Executes the specified SOQL query."
        }, 
         {
            "name":"explainQuery",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"explain", type:"string", info:"A SOQL query to get performance feedback on. Use explain instead of q to get a response that details how Salesforce will process your query. You can use this feedback to further optimize your queries. You can also use a report or list view ID in place of the query string to get feedback on how Salesforce will process your report or list view", required: true}            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"For retrieving query performance feedback without executing the query or for retrieving query performance feedback on a report or list view."
        },
         {
            "name":"additionalQueryResults",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"queryId", type:"string", info:"the query id to retrive", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"For retrieving additional query results if the initial results are too large."
        },
         {
            "name":"queryAll",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:"the query to execute.", required: true}                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Executes the specified SOQL query. Unlike the Query resource, QueryAll will return records that have been deleted because of a merge or delete. QueryAll will also return information about archived Task and Event records."
        },
         {
            "name":"additionalQueryAll",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"queryId", type:"string", info:"the query id to retrive", required: true}                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"For retrieving additional query results if the initial results are too large."
        },
         {
            "name":"getQuickActions",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of global actions and object-specific actions."
        },
         {
            "name":"postQuickAction",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Invoke a specified quick action."
        },
         {
            "name":"getRecentListViews",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjectType", type:"string", info:"the type of object", required: true}                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns the list of recently used list views for the given sObject type."
        },
         {
            "name":"getRecentlyViewedItems",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"limit", type:"string", info:"An optional limit that specifies the maximum number of records to be returned. If this parameter is not specified, the default maximum number of records returned is the maximum number of entries in RecentlyViewed, which is 200 records per object.", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Gets the most recently accessed items that were viewed or referenced by the current user. Salesforce stores information about record views in the interface and uses it to generate a list of recently viewed and referenced records, such as in the sidebar and for the auto-complete options in search."
        },
         {
            "name":"getRecordCount",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"sObjects", type:"string", info:" comma-delimited list of object names. If a listed object is not found in the org, it is ignored and not returned in the response.This parameter is optional. If this parameter is not provided, the resource returns record counts for all objects in the org.", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Lists information about object record counts in your organization."
        },
         {
            "name":"getRelevantItems",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"lastUpdatedId", type:"string", info:"Compares the entire current list of relevant items to a previous version, if available. Specify the lastUpdatedId value returned in a previous response.", required: false},
                {name:"sobjects", type:"string", info:"To scope the results to a particular object or set of objects, specify the name for one or more sObjects. Case sensitive.", required: false},
                {name:"sobject_lastUpdatedId", type:"string", info:" Compares the current list of relevant items for this particular object to a previous version, if available. Specify the lastUpdatedId value returned in a previous response.", required: false},
                
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Gets the current user’s most relevant items. Relevant items include records for objects in the user’s global search scope and also most recently used (MRU) objects."
        },
         {
            "name":"getKnowledgeLanguageSettings",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns the existing Knowledge language settings, including the default knowledge language and a list of supported Knowledge language information."
        },
               {
                "name":"search",
                "args":[
                    {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                    {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                    {name:"query", type:"string", info:"tA SOSL statement that is properly URL-encoded.", required: true}
                ],
                "callbacks":[
                    {name:"success", info:"Success"},
                    {name:"error", info:"Error"}
                ],
                "description":"Executes the specified SOSL search. The search string must be URL-encoded."
            },
               {
                "name":"searchScopeOrder",
                "args":[
                    {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                    {name:"accessToken", type:"string", info:"Oath acces token", required: true}
                ],
                "callbacks":[
                    {name:"success", info:"Success"},
                    {name:"error", info:"Error"}
                ],
                "description":"Returns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often and arranges the search results accordingly. Objects used most frequently appear at the top of the list."
            },
               {
                "name":"searchResultsLayouts",
                "args":[
                    {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                    {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                    {name:"query", type:"string", info:"tA SOSL statement that is properly URL-encoded.", required: true}
                ],
                "callbacks":[
                    {name:"success", info:"Success"},
                    {name:"error", info:"Error"}
                ],
                "description":"Returns search result layout information for the objects in the query string. For each object, this call returns the list of fields displayed on the search results page as columns, the number of rows displayed on the first page, and the label used on the search results page."
            },
           {
            "name":"searchSuggestedRecords",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:"tA SOSL statement that is properly URL-encoded.", required: true},
                {name:"sObject", type:"string", info:"the SObject required", required: true},     
                {name:"fields", type:"string", info:"Used for creating lookup queries. Specify multiple fields using a comma-separated list. Specifies which lookup fields to be returned in the response.", required: false},                
                {name:"groupId", type:"string", info:"groupId	Optional. Specifies one or more unique identifiers of one or more groups that the question to return was posted to. Specify multiple groups using a comma-separated list. This parameter is only applicable when the parameter type equals question. Don’t use with the userId.", required: false},                
                {name:"ignoreUnsupportedSObjects", type:"string", info:"Specifies what to do if unsupported objects are included in the request. If false and an unsupported object is included, an error is returned. If true and an unsupported object is included, the object is ignored and no error is returned. See the Unsupported Objects section for reference. The default is false.", required: false},                
                {name:"limit", type:"string", info:"", required: false},                
                {name:"networkId", type:"string", info:"", required: false},                
                {name:"topicId", type:"string", info:"", required: false},                
                {name:"type", type:"string", info:"", required: false},      
                {name:"userId", type:"string", info:"", required: false},                
                {name:"useSearchScope", type:"string", info:"", required: false},                
                {name:"where", type:"string", info:"", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of suggested records whose names match the user’s search string. The suggestions resource provides a shortcut for users to navigate directly to likely relevant records, before performing a full search."
        },
        {
            "name":"searchSuggestedArticleTitleMatches",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:"tA SOSL statement that is properly URL-encoded.", required: true},
                {name:"publishStatus", type:"string", info:"", required: true},
                {name:"language", type:"string", info:"the language", required: true},
                {name:"articleTypes", type:"string", info:"", required: false},
                {name:"categories", type:"string", info:"", required: false},
                {name:"channel", type:"string", info:"", required: false},
                {name:"limit", type:"string", info:"", required: false},
                {name:"topics", type:"string", info:"", required: false},
                {name:"validationStatus", type:"string", info:"", required: false}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of Salesforce Knowledge article titles that match the user’s search query string. Provides a shortcut to navigate directly to likely relevant articles before the user performs a search."
        },
        {
            "name":"searchSuggestedQueries",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true},
                {name:"query", type:"string", info:"The user’s search query string, properly URL-encoded. Suggestions are returned only if the user’s query string meets the minimum length requirements: one character for queries in Chinese, Japanese, and Korean, and three characters for all other languages. Query strings exceeding the maximum length of 250 characters return an error.", required: true},
                {name:"language", type:"string", info:"The language of the user’s query.", required: true},
                {name:"limit", type:"string", info:"limit of results.", required: false},
                {name:"channel", type:"string", info:"", required: false}
                
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of suggested searches based on the user’s query string text matching searches that other users have performed in Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs a search."
        },{
            "name":"getTabs",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":"Returns a list of all tabs—including Lightning page tabs—available to the current user, regardless of whether the user has chosen to hide tabs via the All Tabs  tab "
        },{
            "name":"getThemes",
            "args":[
                {name:"instance", type:"credentials", info:"the user instance on salesforce.", required: true},
                {name:"accessToken", type:"string", info:"Oath acces token", required: true}
            ],
            "callbacks":[
                {name:"success", info:"Success"},
                {name:"error", info:"Error"}
            ],
            "description":" Get a list of all available custom actions."
        } 
    ]
    })
};
