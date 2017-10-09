[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/salesforce/functions?utm_source=RapidAPIGitHub_salesforceFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# salesforce Package
salesforce provides companies with an interface for case management and task management, and a system for automatically routing and escalating important events.
* Domain: [salesforce](http://salesforce.com)
* Credentials: instance, client_id, client_secret, username, password

## How to get credentials: 
0. //TODO: add credentials 
1. Item two 



## Custom datatypes: 
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]``` 
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```
 

## salesforce.getAccessToken
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.

| Field        | Type       | Description
|--------------|------------|----------
| instance     | credentials| the user instance on salesforce.
| client_id    | credentials| client id on salesforce.
| client_secret| credentials| secret key on salesforce.
| username     | credentials| username on salesforce.
| password     | credentials| password on salesforce.

## salesforce.getAllVersions
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.

| Field   | Type       | Description
|---------|------------|----------
| instance| credentials| the user instance on salesforce.

## salesforce.getResourcesByVersion
Lists available resources for the specified API version, including resource name and URI.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.getLimits
Lists information about limits in your org. This resource is available in REST API version 29.0 and later for API users with the View Setup and Configuration permission.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.describeGlobal
Lists the available objects and their metadata for your organization’s data. In addition, it provides the organization encoding, as well as the maximum batch size permitted in queries.

| Field        | Type       | Description
|--------------|------------|----------
| instance     | credentials| the user instance on salesforce.
| accessToken  | string     | Oath acces token
| modifiedSince| string     | query only colums moldified within the given range

## salesforce.getAccountObjectMetadata
Retrieve the metadata for the Account object using the GET method.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token

## salesforce.createSObject
Create a new Account object using the POST method

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | Object name to create
| inputs     | string     | json formated body for new object to be created

## salesforce.describeSingleObject
Completely describes the individual metadata at all levels for the specified object.

| Field        | Type       | Description
|--------------|------------|----------
| instance     | credentials| the user instance on salesforce.
| accessToken  | string     | Oath acces token
| sObjectName  | string     | the SObject required
| modifiedSince| string     | query only colums moldified within the given range

## salesforce.getObjectsDeletedRecords
Retrieves the list of individual records that have been deleted within the given timespan for the specified object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| start      | string     | Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data.
| end        | string     |  Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. 

## salesforce.getObjectsUpdatedRecords
Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| start      | string     | Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data.
| end        | string     |  Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. 

## salesforce.getObjectsNamedLayouts
Retrieves information about alternate named layouts for a given object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| layoutName | string     | the layout for for the returned query

## salesforce.getObjectRows
Accesses records based on the specified object ID.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| recordId   | string     | the record id to fetch
| fields     | string     | Optional list of fields used to return values for.

## salesforce.deleteObjectRows
DELETE method to delete records.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| recordId   | string     | the record id to fetch

## salesforce.updateObjectRows
PATCH method to update records.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| recordId   | string     | the record id to fetch
| fields     | string     | Optional list of fields used to return values for.

## salesforce.getObjectRowsByExternalId
Gets records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| fieldName  | string     | the  specified external ID field
| fieldValue | string     | the value for the object.

## salesforce.deleteObjectRowsByExternalId
strong textDelete object records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| fieldName  | string     | the  specified external ID field
| fieldValue | string     | the value for the object.

## salesforce.updateObjectRowsByExternalId
Updates records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| fieldName  | string     | the  specified external ID field
| fieldValue | string     | the value for the object.

## salesforce.postObjectRowsByExternalId
adds records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required
| fieldName  | string     | the specified external ID field
| fieldValue | string     | the value for the object.
| jsonbody   | string     | json formated body for new object to be created

## salesforce.getApprovalLayouts
Returns a list of approval layouts for a specified object. Specify a particular approval process name to limit the return value to one specific approval layout.

| Field              | Type       | Description
|--------------------|------------|----------
| instance           | credentials| the user instance on salesforce.
| accessToken        | string     | Oath acces token
| sObjectName        | string     | the SObject required
| approvalProcessName| string     | the specified approval Process Name field

## salesforce.getCompactLayouts
Returns a list of compact layouts for a specific object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | the SObject required

## salesforce.describeLayouts
Returns a list of layouts and descriptions. The list of fields and the layout name are returned.

| Field       | Type       | Description
|-------------|------------|----------
| instance    | credentials| the user instance on salesforce.
| accessToken | string     | Oath acces token
| sObjectName | string     | the SObject required
| recordTypeId| string     | the id for the record type

## salesforce.getPlatformAction
Returns the description of the PlatformAction.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| version    | string     | the api version used
| accessToken| string     | Oath acces token

## salesforce.getObjectsQuickActions
Returns a list of specific object’s actions as well as global actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return

## salesforce.postObjectsQuickActions
Return a specific object's action.15

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| jsonbody   | string     | json formated body for new object to be created

## salesforce.getObjectsActionsDefaultValues
Return a specific action’s descriptive detail

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return

## salesforce.getObjectsActionsDefaultValuesById
Return a specific action’s descriptive detail

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| contextId  | string     | the required action to return

## salesforce.getRecordsByRelationship
Return a specific action’s descriptive detail

| Field                | Type       | Description
|----------------------|------------|----------
| instance             | credentials| the user instance on salesforce.
| sObjectName          | string     | the SObject required
| accessToken          | string     | Oath acces token
| actionName           | string     | the required action to return
| recordId             | string     | the record id to fetch
| relationshipFieldName| string     | the name of relationship Field to fetch
| fields               | string     | Optional list of fields used to return values for.

## salesforce.deleteRecordByRelationship
Deletes record by traversing object relationships via friendly URLs. 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| contextId  | string     | the required action to return

## salesforce.updateRecordByRelationship
Updates record by traversing object relationships via friendly URLs.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| string     | the SObject required
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| contextId  | string     | the required action to return

## salesforce.getSuggestedArticlesByRecordId
Returns a list of suggested Salesforce Knowledge articles for a case, work order, or work order line item.

| Field           | Type       | Description
|-----------------|------------|----------
| language        | credentials| Language that the article is written in.
| instance        | credentials| the user instance on salesforce.
| sObjectName     | string     | the SObject required
| accessToken     | string     | Oath acces token
| description     | string     | Text of the description. Valid only for new records without an existing ID and required if subject is null.
| subject         | string     | Text of the subject
| subject         | string     | Text of the subject
| articleTypes    | string     | Three-character ID prefixes indicating the desired article types
| categories      | string     | The name of the data category group and the data category API name (not category title) for desired articles.
| limit           | string     | Specifies the maximum number of suggested articles to return.
| publishStatus   | string     | . The article’s publication status.
| topics          | string     | The topic of returned articles. 
| validationStatus| string     | The validation status of returned articles. 

## salesforce.getSugestedArticles
Returns a list of suggested Salesforce Knowledge articles for a case, work order, or work order line item.

| Field           | Type       | Description
|-----------------|------------|----------
| language        | credentials| Language that the article is written in.
| instance        | credentials| the user instance on salesforce.
| accessToken     | string     | Oath acces token
| description     | string     | Text of the description. Valid only for new records without an existing ID and required if subject is null.
| subject         | string     | Text of the subject
| subject         | string     | Text of the subject
| articleTypes    | string     | Three-character ID prefixes indicating the desired article types
| categories      | string     | The name of the data category group and the data category API name (not category title) for desired articles.
| limit           | string     | Specifies the maximum number of suggested articles to return.
| publishStatus   | string     | . The article’s publication status.
| topics          | string     | The topic of returned articles. 
| validationStatus| string     | The validation status of returned articles. 

## salesforce.getUserPasswordInformation
 get information about a user password

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| userId     | string     | the user id to fetch

## salesforce.setUserPassword
 Sets user password.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| userId     | string     | the user id to fetch
| newPassword| string     | the user id to fetch

## salesforce.resetUserPassword
 Resets the user password.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| userId     | string     | the user id to fetch

## salesforce.getPlatformEventByName
 Gets the definition of a platform event in JSON format for a given event name.

| Field            | Type       | Description
|------------------|------------|----------
| instance         | credentials| the user instance on salesforce.
| accessToken      | string     | Oath acces token
| platformEventName| string     | the platform event name to fetch

## salesforce.getPlatformEventBySchemaId
Gets the definition of a platform event in JSON format for a given schema ID.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| schemaId   | string     | the platform event id to fetch

## salesforce.getSalesforceAppDropDownItems
Returns a list of items in the Salesforce app drop-down menu.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.getSalesforceNavMenuItems
Returns a list of items in the Salesforce1 navigation menu.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.getCompactLayouts
Returns a list of compact layouts for multiple objects.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| objects    | string     | A comma-delimited list of objects. The primary compact layout for each object in this list will be returned in the response of this resource.                

## salesforce.getListActionsTypes
Retrieve a list of general action types for the current organization.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.postToStandardAction
 Make a post request to an standard action type. 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| inputs     | string     | A JSON object{ "inputs": [ "field": "value" ] }

## salesforce.postToCustomAction
Post request to any custom action.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| inputs     | string     | A JSON object{ "inputs": [ "field": "value" ] }

## salesforce.getStandardActions
Get a list of all available standard actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.getCustomActions
 Get a list of all available custom actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| actionName | string     | the required action to return
| userId     | string     | the user id to fetch

## salesforce.describeListView
Returns detailed information about a list view, including the ID, the columns, and the SOQL query.

| Field       | Type       | Description
|-------------|------------|----------
| instance    | credentials| the user instance on salesforce.
| accessToken | string     | Oath acces token
| sObjectType | string     | the type of object
| queryLocator| string     | The children records can be accessed in the execute method of Batch Apex

## salesforce.getListViewResults
 Get a list of all available custom actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectType| string     | the type of object
| listViewId | string     | the view id to fetch

## salesforce.getListViews
Returns the list of list views for the specified sObject, including the ID and other basic information about each list view.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectType| string     | the type of object

## salesforce.getDataCategoryGroups
Get data category groups that are visible to the current user.

| Field            | Type       | Description
|------------------|------------|----------
| instance         | credentials| the user instance on salesforce.
| accessToken      | string     | Oath acces token
| sObjectName      | string     | KnowledgeArticleVersion only.... for now
| topCategoriesOnly| Boolean    | Boolean

## salesforce.getDataCategoryDetail
 Get data category details and the child categories by a pgiven category.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectName| string     | KnowledgeArticleVersion only.... for now
| group      | string     | the group to filter the data
| category   | string     | data Categories

## salesforce.getArticlesList
Get a page of online articles for the given language and category through either search or query.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| query      | string     |  Performs an SOSL search. If the query string is null, empty, or not given, an SOQL query runs.
| channel    | string     | Defaults to user’s context. For information on channel values, see Valid channel values.
| categories | string     | Map JSON format {“group1”:”category1”,”group2”:”category2”,...}
| queryMethod| string     | values are: AT, BELOW, ABOVE, ABOVE_OR_BELOW. Only valid when categories are specified, defaults to ABOVE_OR_BELOW.
| sort       | string     | a sortable field name LastPublishedDate, CreatedDate, Title, ViewScore. Defaults to LastPublishedDate for query and relevance for search.
| order      | string     | 
| pageSize   | string     | 
| pageNumber | string     | 

## salesforce.getArticleDetails
Get all article fields, accessible to the user.

| Field         | Type       | Description
|---------------|------------|----------
| instance      | credentials| the user instance on salesforce.
| accessToken   | string     | Oath acces token
| articleId     | string     | article Id
| channel       | string     | defaults to user’s context.
| updateViewStat| bolean     | boolean, defaults to true. If true, API updates the view count in the given channel as well as the total view count.

## salesforce.parameterizedSearch
 Get a list of all available custom actions.

| Field          | Type       | Description
|----------------|------------|----------
| instance       | credentials| the user instance on salesforce.
| accessToken    | string     | Oath acces token
| query          | string     | A search string that is properly URL-encoded
| dataCategory   | string     | Single value. If an organization uses Salesforce Knowledge articles or answers, dataCategory filters all search results based on one data category.
| division       | string     | ingle value. Filters search results based on the division field.
| fields         | string     | Array of one or more fields to return in the response for each sobjects specified. At least one sobjects must be specified at the global level.
| in             | string     | Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.
| metadata       | string     | Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.
| in             | string     | Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.
| metadata       | string     | Specifies if metadata should be returned in the response. No metadata is returned by default. To include metadata in the response, use the LABELS value, which returns the display label for the fields returned in search results. 
| netWorkIds     | string     | Filters search results by an array.A network ID represents the community ID.
| offset         | string     | Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.
| overallLimit   | string     | Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.
| offset         | string     | Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.
| overallLimit   | string     | Single value. The maximum number of results to return across all sobject parameters specified.The maximum overallLimit is 2000.
| pricebookId    | string     | Single value. Filters product search results by a price book ID for only the Product2 object. The price book ID must be associated with the product that you’re searching for. For example, ?q=laptop&sobject=product2&pricebookId=01sxx0000002MffAAE
| snippet        | string     | he target length (maximum number of snippet characters) to return in Salesforce Knowledge article, case, case comment, feed, feed comment, idea, and idea comment search results. The snippet parameter displays contextual excerpts and highlights the search term for each article in the search results. Snippet results are used to differentiate matches to the search term in article search results. The target length can be from 50 to 1000 characters.Snippet and highlights are generated from email, text, and text area (long and rich) fields. Snippets aren’t displayed for partially matching searches or if the user doesn’t have access to the field that contains the snippet. Snippets are only displayed when 20 or fewer results are returned on a page.
| sobjects       | string     | 	Objects to return in the response. Must contain valid object types. Use with the required parameters.
| spellCorrection| boolean    | 	FSpecifies whether spell correction is enabled for a user’s search. When set to true, spell correction is enabled for searches that support spell correction. The default value is true.
| updateTracking | string     | Specifies a value of true to track keywords that are used in Salesforce Knowledge article searches only.If unspecified, the default value of false is applied.
| updateViewStat | string     | Specifies a value of true to update an article’s view statistics. Valid only for Salesforce Knowledge article searches.If unspecified, the default value of false is applied.

## salesforce.submitRecordForApproval
Submit a particular record if that entity supports an approval process and one has already been defined. 

| Field          | Type       | Description
|----------------|------------|----------
| instance       | credentials| the user instance on salesforce.
| accessToken    | string     | Oath acces token
| approvalRequest| string     | A JSON object

## salesforce.getAllWorkflowRules
 Returns a list of all active workflow rules.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.triggerProcessRules
Trigger process rules. All rules associated with the specified ID will be evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| contextIds | string     | the required action to return
| userId     | string     | An array of contextIds as a JSON object in the request body

## salesforce.query
Executes the specified SOQL query.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| query      | string     | the query to execute.

## salesforce.explainQuery
For retrieving query performance feedback without executing the query or for retrieving query performance feedback on a report or list view.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| explain    | string     | A SOQL query to get performance feedback on. Use explain instead of q to get a response that details how Salesforce will process your query. You can use this feedback to further optimize your queries. You can also use a report or list view ID in place of the query string to get feedback on how Salesforce will process your report or list view

## salesforce.additionalQueryResults
For retrieving additional query results if the initial results are too large.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| queryId    | string     | the query id to retrive

## salesforce.queryAll
Executes the specified SOQL query. Unlike the Query resource, QueryAll will return records that have been deleted because of a merge or delete. QueryAll will also return information about archived Task and Event records.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| query      | string     | the query to execute.

## salesforce.additionalQueryAll
For retrieving additional query results if the initial results are too large.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| queryId    | string     | the query id to retrive

## salesforce.getQuickActions
Returns a list of global actions and object-specific actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.postQuickAction
Invoke a specified quick action.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.getRecentListViews
Returns the list of recently used list views for the given sObject type.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjectType| string     | the type of object

## salesforce.getRecentlyViewedItems
Gets the most recently accessed items that were viewed or referenced by the current user. Salesforce stores information about record views in the interface and uses it to generate a list of recently viewed and referenced records, such as in the sidebar and for the auto-complete options in search.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| limit      | string     | An optional limit that specifies the maximum number of records to be returned. If this parameter is not specified, the default maximum number of records returned is the maximum number of entries in RecentlyViewed, which is 200 records per object.

## salesforce.getRecordCount
Lists information about object record counts in your organization.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| sObjects   | string     |  comma-delimited list of object names. If a listed object is not found in the org, it is ignored and not returned in the response.This parameter is optional. If this parameter is not provided, the resource returns record counts for all objects in the org.

## salesforce.getRelevantItems
Gets the current user’s most relevant items. Relevant items include records for objects in the user’s global search scope and also most recently used (MRU) objects.

| Field                | Type       | Description
|----------------------|------------|----------
| instance             | credentials| the user instance on salesforce.
| accessToken          | string     | Oath acces token
| lastUpdatedId        | string     | Compares the entire current list of relevant items to a previous version, if available. Specify the lastUpdatedId value returned in a previous response.
| sobjects             | string     | To scope the results to a particular object or set of objects, specify the name for one or more sObjects. Case sensitive.
| sobject_lastUpdatedId| string     |  Compares the current list of relevant items for this particular object to a previous version, if available. Specify the lastUpdatedId value returned in a previous response.

## salesforce.getKnowledgeLanguageSettings
Returns the existing Knowledge language settings, including the default knowledge language and a list of supported Knowledge language information.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.search
Executes the specified SOSL search. The search string must be URL-encoded.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| query      | string     | tA SOSL statement that is properly URL-encoded.

## salesforce.searchScopeOrder
Returns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often and arranges the search results accordingly. Objects used most frequently appear at the top of the list.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.searchResultsLayouts
Returns search result layout information for the objects in the query string. For each object, this call returns the list of fields displayed on the search results page as columns, the number of rows displayed on the first page, and the label used on the search results page.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| query      | string     | tA SOSL statement that is properly URL-encoded.

## salesforce.searchSuggestedRecords
Returns a list of suggested records whose names match the user’s search string. The suggestions resource provides a shortcut for users to navigate directly to likely relevant records, before performing a full search.

| Field                    | Type       | Description
|--------------------------|------------|----------
| instance                 | credentials| the user instance on salesforce.
| accessToken              | string     | Oath acces token
| query                    | string     | tA SOSL statement that is properly URL-encoded.
| sObject                  | string     | the SObject required
| fields                   | string     | Used for creating lookup queries. Specify multiple fields using a comma-separated list. Specifies which lookup fields to be returned in the response.
| groupId                  | string     | groupId	Optional. Specifies one or more unique identifiers of one or more groups that the question to return was posted to. Specify multiple groups using a comma-separated list. This parameter is only applicable when the parameter type equals question. Don’t use with the userId.
| ignoreUnsupportedSObjects| string     | Specifies what to do if unsupported objects are included in the request. If false and an unsupported object is included, an error is returned. If true and an unsupported object is included, the object is ignored and no error is returned. See the Unsupported Objects section for reference. The default is false.
| limit                    | string     | 
| networkId                | string     | 
| topicId                  | string     | 
| type                     | string     | 
| userId                   | string     | 
| useSearchScope           | string     | 
| where                    | string     | 

## salesforce.searchSuggestedArticleTitleMatches
Returns a list of Salesforce Knowledge article titles that match the user’s search query string. Provides a shortcut to navigate directly to likely relevant articles before the user performs a search.

| Field           | Type       | Description
|-----------------|------------|----------
| instance        | credentials| the user instance on salesforce.
| accessToken     | string     | Oath acces token
| query           | string     | tA SOSL statement that is properly URL-encoded.
| publishStatus   | string     | 
| language        | string     | the language
| articleTypes    | string     | 
| categories      | string     | 
| channel         | string     | 
| limit           | string     | 
| topics          | string     | 
| validationStatus| string     | 

## salesforce.searchSuggestedQueries
Returns a list of suggested searches based on the user’s query string text matching searches that other users have performed in Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs a search.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token
| query      | string     | The user’s search query string, properly URL-encoded. Suggestions are returned only if the user’s query string meets the minimum length requirements: one character for queries in Chinese, Japanese, and Korean, and three characters for all other languages. Query strings exceeding the maximum length of 250 characters return an error.
| language   | string     | The language of the user’s query.
| limit      | string     | limit of results.
| channel    | string     | 

## salesforce.getTabs
Returns a list of all tabs—including Lightning page tabs—available to the current user, regardless of whether the user has chosen to hide tabs via the All Tabs  tab 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

## salesforce.getThemes
 Get a list of all available custom actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| string     | Oath acces token

