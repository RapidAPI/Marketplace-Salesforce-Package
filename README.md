[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Salesforce/functions?utm_source=RapidAPIGitHub_SalesforceFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)

# Salesforce Package
salesforce provides companies with an interface for case management and task management, and a system for automatically routing and escalating important events.
* Domain: [Salesforce](http://salesforce.com)
* Credentials: instance, client_id, client_secret, username, password

## How to get credentials: 
0. Item one 
1. Item two 



## Custom datatypes: 
 |Datatype|Description|Example
 |--------|-----------|----------
 |Datepicker|String which includes date and time|```2016-05-28 00:00:00```
 |Map|String which includes latitude and longitude coma separated|```50.37, 26.56```
 |List|Simple array|```["123", "sample"]``` 
 |Select|String with predefined values|```sample```
 |Array|Array of objects|```[{"Second name":"123","Age":"12","Photo":"sdf","Draft":"sdfsdf"},{"name":"adi","Second name":"bla","Age":"4","Photo":"asfserwe","Draft":"sdfsdf"}] ```
 

## Salesforce.getAccessToken
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.

| Field        | Type       | Description
|--------------|------------|----------
| instance     | credentials| the user instance on salesforce.
| client_id    | credentials| client id on salesforce.
| client_secret| credentials| secret key on salesforce.
| username     | credentials| username on salesforce.
| password     | credentials| password on salesforce.

## Salesforce.getAllVersions
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.

| Field   | Type       | Description
|---------|------------|----------
| instance| credentials| the user instance on salesforce.

## Salesforce.getResourcesByVersion
Lists available resources for the specified API version, including resource name and URI.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getLimits
Lists information about limits in your org. This resource is available in REST API version 29.0 and later for API users with the View Setup and Configuration permission.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.describeGlobal
Lists the available objects and their metadata for your organization’s data. In addition, it provides the organization encoding, as well as the maximum batch size permitted in queries.

| Field        | Type       | Description
|--------------|------------|----------
| instance     | credentials| the user instance on salesforce.
| accessToken  | String     | Oath acces token
| modifiedSince| Datepicker | query only colums moldified within the given range

## Salesforce.getAccountObjectMetadata
Retrieve the metadata for the Account object using the GET method.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| String     | the SObject required
| accessToken| String     | Oath acces token

## Salesforce.createSObject
Create a new Account object using the POST method

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | Object name to create
| inputs     | String     | json formated body for new object to be created

## Salesforce.describeSingleObject
Completely describes the individual metadata at all levels for the specified object.

| Field        | Type       | Description
|--------------|------------|----------
| instance     | credentials| the user instance on salesforce.
| accessToken  | String     | Oath acces token
| sObjectName  | String     | the SObject required
| modifiedSince| Datepicker | query only colums moldified within the given range

## Salesforce.getObjectsDeletedRecords
Retrieves the list of individual records that have been deleted within the given timespan for the specified object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| start      | Datepicker | Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data.
| end        | Datepicker |  Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. 

## Salesforce.getObjectsUpdatedRecords
Retrieves the list of individual records that have been updated (added or changed) within the given timespan for the specified object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| start      | Datepicker | Starting date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data.
| end        | Datepicker |  Ending date/time (Coordinated Universal Time (UTC)—not local— timezone) of the timespan for which to retrieve the data. 

## Salesforce.getObjectsNamedLayouts
Retrieves information about alternate named layouts for a given object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| layoutName | String     | the layout for for the returned query

## Salesforce.getObjectRows
Accesses records based on the specified object ID.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| recordId   | String     | the record id to fetch
| fields     | String     | Optional list of fields used to return values for.

## Salesforce.deleteObjectRows
DELETE method to delete records.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| recordId   | String     | the record id to fetch

## Salesforce.updateObjectRows
PATCH method to update records.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| recordId   | String     | the record id to fetch
| fields     | String     | Optional list of fields used to return values for.

## Salesforce.getObjectRowsByExternalId
Gets records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| fieldName  | String     | the  specified external ID field
| fieldValue | String     | the value for the object.

## Salesforce.deleteObjectRowsByExternalId
strong textDelete object records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| fieldName  | String     | the  specified external ID field
| fieldValue | String     | the value for the object.

## Salesforce.updateObjectRowsByExternalId
Updates records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| fieldName  | String     | the  specified external ID field
| fieldValue | String     | the value for the object.
| fields     | String     | the values to change.

## Salesforce.postObjectRowsByExternalId
adds records based on the value of a specified external ID field.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required
| fieldName  | String     | the specified external ID field
| fieldValue | String     | the value for the object.
| jsonbody   | String     | json formated body for new object to be created

## Salesforce.getApprovalLayouts
Returns a list of approval layouts for a specified object. Specify a particular approval process name to limit the return value to one specific approval layout.

| Field              | Type       | Description
|--------------------|------------|----------
| instance           | credentials| the user instance on salesforce.
| accessToken        | String     | Oath acces token
| sObjectName        | String     | the SObject required
| approvalProcessName| String     | the specified approval Process Name field

## Salesforce.getCompactLayouts
Returns a list of compact layouts for a specific object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | the SObject required

## Salesforce.describeLayouts
Returns a list of layouts and descriptions. The list of fields and the layout name are returned.

| Field       | Type       | Description
|-------------|------------|----------
| instance    | credentials| the user instance on salesforce.
| accessToken | String     | Oath acces token
| sObjectName | String     | the SObject required
| recordTypeId| String     | the id for the record type

## Salesforce.getPlatformAction
Returns the description of the PlatformAction.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getObjectsQuickActions
Returns a list of specific object’s actions as well as global actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| String     | the SObject required
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return

## Salesforce.getObjectsActionsDefaultValues
Return a specific action’s descriptive detail

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| String     | the SObject required
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return

## Salesforce.getObjectsActionsDefaultValuesById
Return a specific action’s descriptive detail

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| String     | the SObject required
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return
| contextId  | String     | the required action to return

## Salesforce.getRecordsByRelationship
Return a specific action’s descriptive detail

| Field                | Type       | Description
|----------------------|------------|----------
| instance             | credentials| the user instance on salesforce.
| sObjectName          | String     | the SObject required
| accessToken          | String     | Oath acces token
| actionName           | String     | the required action to return
| recordId             | String     | the record id to fetch
| relationshipFieldName| String     | the name of relationship Field to fetch
| fields               | String     | Optional list of fields used to return values for.

## Salesforce.deleteRecordByRelationship
Deletes record by traversing object relationships via friendly URLs. 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| String     | the SObject required
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return
| contextId  | String     | the required action to return

## Salesforce.updateRecordByRelationship
Updates record by traversing object relationships via friendly URLs.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| sObjectName| String     | the SObject required
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return
| contextId  | String     | the required action to return

## Salesforce.getSuggestedArticlesByRecordId
Returns a list of suggested Salesforce Knowledge articles for a case, work order, or work order line item.

| Field           | Type       | Description
|-----------------|------------|----------
| RecordID        | String     | record id to query by.
| language        | String     | Language that the article is written in.
| instance        | credentials| the user instance on salesforce.
| sObjectName     | String     | the SObject required
| accessToken     | String     | Oath acces token
| description     | String     | Text of the description. Valid only for new records without an existing ID and required if subject is null.
| subject         | String     | Text of the subject
| subject         | String     | Text of the subject
| articleTypes    | String     | Three-character ID prefixes indicating the desired article types
| categories      | String     | The name of the data category group and the data category API name (not category title) for desired articles.
| limit           | String     | Specifies the maximum number of suggested articles to return.
| publishStatus   | String     | . The article’s publication status.
| topics          | String     | The topic of returned articles. 
| validationStatus| String     | The validation status of returned articles. 

## Salesforce.getSugestedArticles
Returns a list of suggested Salesforce Knowledge articles for a case, work order, or work order line item.

| Field           | Type       | Description
|-----------------|------------|----------
| sObjectName     | String     | the SObject required
| language        | string     | Language that the article is written in.
| instance        | credentials| the user instance on salesforce.
| accessToken     | String     | Oath acces token
| description     | String     | Text of the description. Valid only for new records without an existing ID and required if subject is null.
| subject         | String     | Text of the subject
| subject         | String     | Text of the subject
| articleTypes    | String     | Three-character ID prefixes indicating the desired article types
| categories      | String     | The name of the data category group and the data category API name (not category title) for desired articles.
| limit           | String     | Specifies the maximum number of suggested articles to return.
| publishStatus   | String     | . The article’s publication status.
| topics          | String     | The topic of returned articles. 
| validationStatus| String     | The validation status of returned articles. 

## Salesforce.getUserPasswordInformation
 get information about a user password

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| userId     | String     | the user id to fetch

## Salesforce.setUserPassword
 Sets user password.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| userId     | String     | the user id to fetch
| newPassword| String     | the user id to fetch

## Salesforce.resetUserPassword
 Resets the user password.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| userId     | String     | the user id to fetch

## Salesforce.getPlatformEventByName
 Gets the definition of a platform event in JSON format for a given event name.

| Field            | Type       | Description
|------------------|------------|----------
| instance         | credentials| the user instance on salesforce.
| accessToken      | String     | Oath acces token
| platformEventName| String     | the platform event name to fetch

## Salesforce.getPlatformEventBySchemaId
Gets the definition of a platform event in JSON format for a given schema ID.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| schemaId   | String     | the platform event id to fetch

## Salesforce.getSalesforceAppDropDownItems
Returns a list of items in the Salesforce app drop-down menu.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getSalesforceNavMenuItems
Returns a list of items in the Salesforce1 navigation menu.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getCompactLayouts
Returns a list of compact layouts for multiple objects.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | A comma-delimited list of objects. The primary compact layout for each object in this list will be returned in the response of this resource.                

## Salesforce.getListActionsTypes
Retrieve a list of general action types for the current organization.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.postToStandardAction
 Make a post request to an standard action type. 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return
| inputs     | String     | A JSON object{ "inputs": [ "field": "value" ] }

## Salesforce.postToCustomAction
Post request to any custom action.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| actionName | String     | the required action to return
| inputs     | String     | A JSON object{ "inputs": [ "field": "value" ] }

## Salesforce.getStandardActions
Get a list of all available standard actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getCustomActions
 Get a list of all available custom actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.describeListView
Returns detailed information about a list view, including the ID, the columns, and the SOQL query.

| Field       | Type       | Description
|-------------|------------|----------
| instance    | credentials| the user instance on salesforce.
| accessToken | String     | Oath acces token
| sObjectType | String     | the type of object
| queryLocator| String     | The children records can be accessed in the execute method of Batch Apex

## Salesforce.getListViewResults
 Get a list of all available custom actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectType| String     | the type of object
| listViewId | String     | the view id to fetch

## Salesforce.getListViews
Returns the list of list views for the specified sObject, including the ID and other basic information about each list view.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectType| String     | the type of object

## Salesforce.getDataCategoryGroups
Get data category groups that are visible to the current user.

| Field            | Type       | Description
|------------------|------------|----------
| instance         | credentials| the user instance on salesforce.
| accessToken      | String     | Oath acces token
| sObjectName      | String     | KnowledgeArticleVersion only.... for now
| topCategoriesOnly| Boolean    | Boolean

## Salesforce.getDataCategoryDetail
 Get data category details and the child categories by a pgiven category.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectName| String     | KnowledgeArticleVersion only.... for now
| group      | String     | the group to filter the data
| category   | String     | data Categories

## Salesforce.getArticlesList
Get a page of online articles for the given language and category through either search or query.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| query      | String     |  Performs an SOSL search. If the query String is null, empty, or not given, an SOQL query runs.
| channel    | String     | Defaults to user’s context. For information on channel values, see Valid channel values.
| categories | String     | Map JSON format {“group1”:”category1”,”group2”:”category2”,...}
| queryMethod| String     | values are: AT, BELOW, ABOVE, ABOVE_OR_BELOW. Only valid when categories are specified, defaults to ABOVE_OR_BELOW.
| sort       | String     | a sortable field name LastPublishedDate, CreatedDate, Title, ViewScore. Defaults to LastPublishedDate for query and relevance for search.
| order      | String     | 
| pageSize   | String     | 
| pageNumber | String     | 

## Salesforce.getArticleDetails
Get all article fields, accessible to the user.

| Field         | Type       | Description
|---------------|------------|----------
| instance      | credentials| the user instance on salesforce.
| accessToken   | String     | Oath acces token
| articleId     | String     | article Id
| channel       | String     | defaults to user’s context.
| updateViewStat| bolean     | boolean, defaults to true. If true, API updates the view count in the given channel as well as the total view count.

## Salesforce.parameterizedSearch
 Get a list of all available custom actions.

| Field          | Type       | Description
|----------------|------------|----------
| instance       | credentials| the user instance on salesforce.
| accessToken    | String     | Oath acces token
| query          | String     | A search String that is properly URL-encoded
| dataCategory   | String     | Single value. If an organization uses Salesforce Knowledge articles or answers, dataCategory filters all search results based on one data category.
| division       | String     | ingle value. Filters search results based on the division field.
| fields         | String     | Array of one or more fields to return in the response for each sobjects specified. At least one sobjects must be specified at the global level.
| in             | String     | Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.
| metadata       | String     | Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.
| in             | String     | Scope of fields to search. If you specify one or more scope values, the fields are returned for all found objects.
| metadata       | String     | Specifies if metadata should be returned in the response. No metadata is returned by default. To include metadata in the response, use the LABELS value, which returns the display label for the fields returned in search results. 
| netWorkIds     | String     | Filters search results by an array.A network ID represents the community ID.
| offset         | String     | Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.
| overallLimit   | String     | Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.
| offset         | String     | Single value. The starting row offset into the result set returned. The maximum offset is 2000. Only one sobject can be specified when using this parameter.
| overallLimit   | String     | Single value. The maximum number of results to return across all sobject parameters specified.The maximum overallLimit is 2000.
| pricebookId    | String     | Single value. Filters product search results by a price book ID for only the Product2 object. The price book ID must be associated with the product that you’re searching for. For example, ?q=laptop&sobject=product2&pricebookId=01sxx0000002MffAAE
| snippet        | String     | he target length (maximum number of snippet characters) to return in Salesforce Knowledge article, case, case comment, feed, feed comment, idea, and idea comment search results. The snippet parameter displays contextual excerpts and highlights the search term for each article in the search results. Snippet results are used to differentiate matches to the search term in article search results. The target length can be from 50 to 1000 characters.Snippet and highlights are generated from email, text, and text area (long and rich) fields. Snippets aren’t displayed for partially matching searches or if the user doesn’t have access to the field that contains the snippet. Snippets are only displayed when 20 or fewer results are returned on a page.
| sobjects       | String     | 	Objects to return in the response. Must contain valid object types. Use with the required parameters.
| spellCorrection| boolean    | 	FSpecifies whether spell correction is enabled for a user’s search. When set to true, spell correction is enabled for searches that support spell correction. The default value is true.
| updateTracking | String     | Specifies a value of true to track keywords that are used in Salesforce Knowledge article searches only.If unspecified, the default value of false is applied.
| updateViewStat | String     | Specifies a value of true to update an article’s view statistics. Valid only for Salesforce Knowledge article searches.If unspecified, the default value of false is applied.

## Salesforce.getProcessApprovals
Submit a particular record if that entity supports an approval process and one has already been defined. 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.submitRecordForApproval
Submit a particular record if that entity supports an approval process and one has already been defined. 

| Field          | Type       | Description
|----------------|------------|----------
| instance       | credentials| the user instance on salesforce.
| accessToken    | String     | Oath acces token
| approvalRequest| String     | A JSON object

## Salesforce.getAllWorkflowRules
 Returns a list of all active workflow rules.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getSingleProcessRule
 Returns a list of all active workflow rules.

| Field         | Type       | Description
|---------------|------------|----------
| instance      | credentials| the user instance on salesforce.
| accessToken   | String     | Oath acces token
| workflowRuleId| String     | rule id
| sObjectName   | String     | the SObject required

## Salesforce.triggerProcessRules
Trigger process rules. All rules associated with the specified ID will be evaluated, regardless of the evaluation criteria. All IDs must be for records on the same object.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| contextIds | String     | the required action to return
| userId     | String     | An array of contextIds as a JSON object in the request body

## Salesforce.query
Executes the specified SOQL query.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| query      | String     | the query to execute.

## Salesforce.explainQuery
For retrieving query performance feedback without executing the query or for retrieving query performance feedback on a report or list view.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| explain    | String     | A SOQL query to get performance feedback on. Use explain instead of q to get a response that details how Salesforce will process your query. You can use this feedback to further optimize your queries. You can also use a report or list view ID in place of the query String to get feedback on how Salesforce will process your report or list view

## Salesforce.additionalQueryResults
For retrieving additional query results if the initial results are too large.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| queryId    | String     | the query id to retrive

## Salesforce.queryAll
Executes the specified SOQL query. Unlike the Query resource, QueryAll will return records that have been deleted because of a merge or delete. QueryAll will also return information about archived Task and Event records.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| query      | String     | the query to execute.

## Salesforce.additionalQueryAll
For retrieving additional query results if the initial results are too large.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| queryId    | String     | the query id to retrive

## Salesforce.getQuickActions
Returns a list of global actions and object-specific actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.postQuickAction
Invoke a specified quick action.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| inputs     | String     | input for action creation
| actionName | String     | action name

## Salesforce.getRecentListViews
Returns the list of recently used list views for the given sObject type.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjectType| String     | the type of object

## Salesforce.getRecentlyViewedItems
Gets the most recently accessed items that were viewed or referenced by the current user. Salesforce stores information about record views in the interface and uses it to generate a list of recently viewed and referenced records, such as in the sidebar and for the auto-complete options in search.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| limit      | String     | An optional limit that specifies the maximum number of records to be returned. If this parameter is not specified, the default maximum number of records returned is the maximum number of entries in RecentlyViewed, which is 200 records per object.

## Salesforce.getRecordCount
Lists information about object record counts in your organization.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| sObjects   | String     |  comma-delimited list of object names. If a listed object is not found in the org, it is ignored and not returned in the response.This parameter is optional. If this parameter is not provided, the resource returns record counts for all objects in the org.

## Salesforce.getRelevantItems
Gets the current user’s most relevant items. Relevant items include records for objects in the user’s global search scope and also most recently used (MRU) objects.

| Field                | Type       | Description
|----------------------|------------|----------
| instance             | credentials| the user instance on salesforce.
| accessToken          | String     | Oath acces token
| lastUpdatedId        | String     | Compares the entire current list of relevant items to a previous version, if available. Specify the lastUpdatedId value returned in a previous response.
| sobjects             | String     | To scope the results to a particular object or set of objects, specify the name for one or more sObjects. Case sensitive.
| sobject_lastUpdatedId| String     |  Compares the current list of relevant items for this particular object to a previous version, if available. Specify the lastUpdatedId value returned in a previous response.

## Salesforce.getKnowledgeLanguageSettings
Returns the existing Knowledge language settings, including the default knowledge language and a list of supported Knowledge language information.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.search
Executes the specified SOSL search. The search String must be URL-encoded.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| query      | String     | tA SOSL statement that is properly URL-encoded.

## Salesforce.searchScopeOrder
Returns an ordered list of objects in the default global search scope of a logged-in user. Global search keeps track of which objects the user interacts with and how often and arranges the search results accordingly. Objects used most frequently appear at the top of the list.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.searchResultsLayouts
Returns search result layout information for the objects in the query String. For each object, this call returns the list of fields displayed on the search results page as columns, the number of rows displayed on the first page, and the label used on the search results page.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| query      | String     | tA SOSL statement that is properly URL-encoded.

## Salesforce.searchSuggestedRecords
Returns a list of suggested records whose names match the user’s search String. The suggestions resource provides a shortcut for users to navigate directly to likely relevant records, before performing a full search.

| Field                    | Type       | Description
|--------------------------|------------|----------
| instance                 | credentials| the user instance on salesforce.
| accessToken              | String     | Oath acces token
| query                    | String     | tA SOSL statement that is properly URL-encoded.
| sObject                  | String     | the SObject required
| fields                   | String     | format for this field:ccount.fields=Website,Phone&contact.fields=Phone .Used for creating lookup queries. Specify multiple fields using a comma-separated list. Specifies which lookup fields to be returned in the response.
| groupId                  | String     | groupId Optional. Specifies one or more unique identifiers of one or more groups that the question to return was posted to. Specify multiple groups using a comma-separated list. This parameter is only applicable when the parameter type equals question. Don’t use with the userId.
| ignoreUnsupportedSObjects| String     | Specifies what to do if unsupported objects are included in the request. If false and an unsupported object is included, an error is returned. If true and an unsupported object is included, the object is ignored and no error is returned. See the Unsupported Objects section for reference. The default is false.
| limit                    | String     | 
| networkId                | String     | 
| topicId                  | String     | 
| type                     | String     | 
| userId                   | String     | 
| useSearchScope           | String     | 
| where                    | String     | 

## Salesforce.searchSuggestedArticleTitleMatches
Returns a list of Salesforce Knowledge article titles that match the user’s search query String. Provides a shortcut to navigate directly to likely relevant articles before the user performs a search.

| Field           | Type       | Description
|-----------------|------------|----------
| instance        | credentials| the user instance on salesforce.
| accessToken     | String     | Oath acces token
| query           | String     | tA SOSL statement that is properly URL-encoded.
| publishStatus   | String     | 
| language        | String     | the language
| articleTypes    | String     | 
| categories      | String     | 
| channel         | String     | 
| limit           | String     | 
| topics          | String     | 
| validationStatus| String     | 

## Salesforce.searchSuggestedQueries
Returns a list of suggested searches based on the user’s query String text matching searches that other users have performed in Salesforce Knowledge. Provides a way to improve search effectiveness, before the user performs a search.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token
| query      | String     | The user’s search query String, properly URL-encoded. Suggestions are returned only if the user’s query String meets the minimum length requirements: one character for queries in Chinese, Japanese, and Korean, and three characters for all other languages. Query Strings exceeding the maximum length of 250 characters return an error.
| language   | String     | The language of the user’s query.
| limit      | String     | limit of results.
| channel    | String     | 

## Salesforce.getTabs
Returns a list of all tabs—including Lightning page tabs—available to the current user, regardless of whether the user has chosen to hide tabs via the All Tabs  tab 

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

## Salesforce.getThemes
 Get a list of all available custom actions.

| Field      | Type       | Description
|------------|------------|----------
| instance   | credentials| the user instance on salesforce.
| accessToken| String     | Oath acces token

