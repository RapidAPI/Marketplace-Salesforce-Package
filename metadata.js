"use strict";

module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'salesforce',
        "tagline": "interact with salseforce",
        "description": "salesforce provides companies with an interface for case management and task management, and a system for automatically routing and escalating important events.",
        "image": "", //TODO: add image
        "repo": "https://github.com/RapidAPI/Marketplace-Salesforce-Package",
        "keywords": ["social", "updates", "network"],//TODO: change this
        "accounts": {
            "domain": "salesforce.com",
            "credentials": [
                "consumerKey",
                "consumerSecret"
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
                {name:"jsonbody", type:"string", info:"json formated body for new object to be created", required: true}
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
            "name":"getObjectsSingleActionDetail",
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
    ]
    })
};
