# Javascript & Typescript SDK for Attio

Developer-friendly & type-safe JS/TS SDK based on the official OpenAPI spec of Attio.

<!-- Start Summary [summary] -->
## Summary

Attio API: Attio is a CRM platform which is highly customisable, incredibly powerful and data-driven. The public API allows you to manipulate records, lists, notes, tasks and more. You can find more information about the Attio API in the [official docs](https://docs.attio.com/docs/overview). Unfortunately, an official JavaScript or TypeScript SDK has not been released yet. In the meantime, we maintain this unofficial SDK to bridge the gap until an official SDK becomes available.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Javascript & Typescript SDK for Attio](#javascript-typescript-sdk-for-attio)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add attio-js
```

### PNPM

```bash
pnpm add attio-js
```

### Bun

```bash
bun add attio-js
```

### Yarn

```bash
yarn add attio-js zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `apiKey` | http | HTTP Bearer | `ATTIO_API_KEY`      |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [attributes](docs/sdks/attributes/README.md)

* [list](docs/sdks/attributes/README.md#list) - List attributes
* [create](docs/sdks/attributes/README.md#create) - Create an attribute
* [get](docs/sdks/attributes/README.md#get) - Get an attribute
* [update](docs/sdks/attributes/README.md#update) - Update an attribute
* [listSelectOptions](docs/sdks/attributes/README.md#listselectoptions) - List select options
* [createSelectOption](docs/sdks/attributes/README.md#createselectoption) - Create a select option
* [updateOption](docs/sdks/attributes/README.md#updateoption) - Update a select option
* [listStatuses](docs/sdks/attributes/README.md#liststatuses) - List statuses

#### [attributes.statuses](docs/sdks/statuses/README.md)

* [create](docs/sdks/statuses/README.md#create) - Create a status
* [update](docs/sdks/statuses/README.md#update) - Update a status

### [comments](docs/sdks/comments/README.md)

* [create](docs/sdks/comments/README.md#create) - Create a comment
* [get](docs/sdks/comments/README.md#get) - Get a comment
* [delete](docs/sdks/comments/README.md#delete) - Delete a comment

### [entries](docs/sdks/entries/README.md)

* [query](docs/sdks/entries/README.md#query) - List entries
* [create](docs/sdks/entries/README.md#create) - Create an entry (add record to list)
* [assert](docs/sdks/entries/README.md#assert) - Assert a list entry by parent
* [getEntry](docs/sdks/entries/README.md#getentry) - Get a list entry
* [update](docs/sdks/entries/README.md#update) - Update a list entry (append multiselect values)
* [overwrite](docs/sdks/entries/README.md#overwrite) - Update a list entry (overwrite multiselect values)
* [delete](docs/sdks/entries/README.md#delete) - Delete a list entry

#### [entries.attributes.values](docs/sdks/values/README.md)

* [list](docs/sdks/values/README.md#list) - List attribute values for a list entry

### [lists](docs/sdks/lists/README.md)

* [listAll](docs/sdks/lists/README.md#listall) - List all lists
* [create](docs/sdks/lists/README.md#create) - Create a list
* [get](docs/sdks/lists/README.md#get) - Get a list
* [update](docs/sdks/lists/README.md#update) - Update a list

### [meta](docs/sdks/meta/README.md)

* [identify](docs/sdks/meta/README.md#identify) - Identify

### [notes](docs/sdks/notes/README.md)

* [list](docs/sdks/notes/README.md#list) - List notes
* [create](docs/sdks/notes/README.md#create) - Create a note
* [get](docs/sdks/notes/README.md#get) - Get a note
* [delete](docs/sdks/notes/README.md#delete) - Delete a note

### [objects](docs/sdks/objects/README.md)

* [list](docs/sdks/objects/README.md#list) - List objects
* [create](docs/sdks/objects/README.md#create) - Create an object
* [get](docs/sdks/objects/README.md#get) - Get an object
* [partialUpdate](docs/sdks/objects/README.md#partialupdate) - Update an object

### [records](docs/sdks/records/README.md)

* [query](docs/sdks/records/README.md#query) - List records
* [create](docs/sdks/records/README.md#create) - Create a record
* [assert](docs/sdks/records/README.md#assert) - Assert a record
* [get](docs/sdks/records/README.md#get) - Get a record
* [partialUpdate](docs/sdks/records/README.md#partialupdate) - Update a record (append multiselect values)
* [update](docs/sdks/records/README.md#update) - Update a record (overwrite multiselect values)
* [delete](docs/sdks/records/README.md#delete) - Delete a record
* [listAttributeValues](docs/sdks/records/README.md#listattributevalues) - List record attribute values
* [listEntries](docs/sdks/records/README.md#listentries) - List record entries

### [tasks](docs/sdks/tasks/README.md)

* [list](docs/sdks/tasks/README.md#list) - List tasks
* [create](docs/sdks/tasks/README.md#create) - Create a task
* [get](docs/sdks/tasks/README.md#get) - Get a task
* [update](docs/sdks/tasks/README.md#update) - Update a task
* [delete](docs/sdks/tasks/README.md#delete) - Delete a task

### [threads](docs/sdks/threads/README.md)

* [list](docs/sdks/threads/README.md#list) - List threads
* [get](docs/sdks/threads/README.md#get) - Get a thread

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Create a webhook
* [get](docs/sdks/webhooks/README.md#get) - Get a webhook
* [partialUpdate](docs/sdks/webhooks/README.md#partialupdate) - Update a webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a webhook

### [workspaceMembers](docs/sdks/workspacemembers/README.md)

* [list](docs/sdks/workspacemembers/README.md#list) - List workspace members
* [get](docs/sdks/workspacemembers/README.md#get) - Get a workspace member

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`attributesCreate`](docs/sdks/attributes/README.md#create) - Create an attribute
- [`attributesCreateSelectOption`](docs/sdks/attributes/README.md#createselectoption) - Create a select option
- [`attributesGet`](docs/sdks/attributes/README.md#get) - Get an attribute
- [`attributesList`](docs/sdks/attributes/README.md#list) - List attributes
- [`attributesListSelectOptions`](docs/sdks/attributes/README.md#listselectoptions) - List select options
- [`attributesListStatuses`](docs/sdks/attributes/README.md#liststatuses) - List statuses
- [`attributesStatusesCreate`](docs/sdks/statuses/README.md#create) - Create a status
- [`attributesStatusesUpdate`](docs/sdks/statuses/README.md#update) - Update a status
- [`attributesUpdate`](docs/sdks/attributes/README.md#update) - Update an attribute
- [`attributesUpdateOption`](docs/sdks/attributes/README.md#updateoption) - Update a select option
- [`commentsCreate`](docs/sdks/comments/README.md#create) - Create a comment
- [`commentsDelete`](docs/sdks/comments/README.md#delete) - Delete a comment
- [`commentsGet`](docs/sdks/comments/README.md#get) - Get a comment
- [`entriesAssert`](docs/sdks/entries/README.md#assert) - Assert a list entry by parent
- [`entriesAttributesValuesList`](docs/sdks/values/README.md#list) - List attribute values for a list entry
- [`entriesCreate`](docs/sdks/entries/README.md#create) - Create an entry (add record to list)
- [`entriesDelete`](docs/sdks/entries/README.md#delete) - Delete a list entry
- [`entriesGetEntry`](docs/sdks/entries/README.md#getentry) - Get a list entry
- [`entriesOverwrite`](docs/sdks/entries/README.md#overwrite) - Update a list entry (overwrite multiselect values)
- [`entriesQuery`](docs/sdks/entries/README.md#query) - List entries
- [`entriesUpdate`](docs/sdks/entries/README.md#update) - Update a list entry (append multiselect values)
- [`listsCreate`](docs/sdks/lists/README.md#create) - Create a list
- [`listsGet`](docs/sdks/lists/README.md#get) - Get a list
- [`listsListAll`](docs/sdks/lists/README.md#listall) - List all lists
- [`listsUpdate`](docs/sdks/lists/README.md#update) - Update a list
- [`metaIdentify`](docs/sdks/meta/README.md#identify) - Identify
- [`notesCreate`](docs/sdks/notes/README.md#create) - Create a note
- [`notesDelete`](docs/sdks/notes/README.md#delete) - Delete a note
- [`notesGet`](docs/sdks/notes/README.md#get) - Get a note
- [`notesList`](docs/sdks/notes/README.md#list) - List notes
- [`objectsCreate`](docs/sdks/objects/README.md#create) - Create an object
- [`objectsGet`](docs/sdks/objects/README.md#get) - Get an object
- [`objectsList`](docs/sdks/objects/README.md#list) - List objects
- [`objectsPartialUpdate`](docs/sdks/objects/README.md#partialupdate) - Update an object
- [`recordsAssert`](docs/sdks/records/README.md#assert) - Assert a record
- [`recordsCreate`](docs/sdks/records/README.md#create) - Create a record
- [`recordsDelete`](docs/sdks/records/README.md#delete) - Delete a record
- [`recordsGet`](docs/sdks/records/README.md#get) - Get a record
- [`recordsListAttributeValues`](docs/sdks/records/README.md#listattributevalues) - List record attribute values
- [`recordsListEntries`](docs/sdks/records/README.md#listentries) - List record entries
- [`recordsPartialUpdate`](docs/sdks/records/README.md#partialupdate) - Update a record (append multiselect values)
- [`recordsQuery`](docs/sdks/records/README.md#query) - List records
- [`recordsUpdate`](docs/sdks/records/README.md#update) - Update a record (overwrite multiselect values)
- [`tasksCreate`](docs/sdks/tasks/README.md#create) - Create a task
- [`tasksDelete`](docs/sdks/tasks/README.md#delete) - Delete a task
- [`tasksGet`](docs/sdks/tasks/README.md#get) - Get a task
- [`tasksList`](docs/sdks/tasks/README.md#list) - List tasks
- [`tasksUpdate`](docs/sdks/tasks/README.md#update) - Update a task
- [`threadsGet`](docs/sdks/threads/README.md#get) - Get a thread
- [`threadsList`](docs/sdks/threads/README.md#list) - List threads
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksPartialUpdate`](docs/sdks/webhooks/README.md#partialupdate) - Update a webhook
- [`workspaceMembersGet`](docs/sdks/workspacemembers/README.md#get) - Get a workspace member
- [`workspaceMembersList`](docs/sdks/workspacemembers/README.md#list) - List workspace members

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AttioError`](./src/models/errors/attioerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Attio } from "attio-js";
import { AttioError } from "attio-js/models/errors/attioerror.js.js";
import { PostV2ObjectsSlugConflictError } from "attio-js/models/errors/getv2objectsobject.js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await attio.objects.create({
      data: {
        apiSlug: "people",
        singularNoun: "Person",
        pluralNoun: "People",
      },
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof AttioError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof PostV2ObjectsSlugConflictError) {
        console.log(error.data$.statusCode); // number
        console.log(error.data$.type); // errors.ConflictType
        console.log(error.data$.code); // errors.ConflictCode
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`AttioError`](./src/models/errors/attioerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (49)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`AttioError`](./src/models/errors/attioerror.ts)**:
* [`GetV2ObjectsObjectNotFoundError`](./src/models/errors/getv2objectsobjectnotfounderror.ts): Not Found. Status code `404`. Applicable to 9 of 57 methods.*
* [`GetV2TargetIdentifierAttributesAttributeNotFoundError`](./src/models/errors/getv2targetidentifierattributesattributenotfounderror.ts): Not Found. Status code `404`. Applicable to 9 of 57 methods.*
* [`GetV2ListsListNotFoundError`](./src/models/errors/getv2listslistnotfounderror.ts): Not Found. Status code `404`. Applicable to 8 of 57 methods.*
* [`MissingValueError`](./src/models/errors/missingvalueerror.ts): Bad Request. Status code `400`. Applicable to 2 of 57 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesValidationTypeError`](./src/models/errors/getv2objectsobjectrecordsrecordidattributesattributevaluesvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 2 of 57 methods.*
* [`PostV2ListsInvalidRequestError`](./src/models/errors/postv2listsinvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 2 of 57 methods.*
* [`ImmutableValueError`](./src/models/errors/immutablevalueerror.ts): Bad Request. Status code `400`. Applicable to 2 of 57 methods.*
* [`PostV2TasksValidationTypeError`](./src/models/errors/postv2tasksvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 2 of 57 methods.*
* [`GetV2ObjectsObjectRecordsRecordIdNotFoundError`](./src/models/errors/getv2objectsobjectrecordsrecordidnotfounderror.ts): Not Found. Status code `404`. Applicable to 2 of 57 methods.*
* [`GetV2NotesNoteIdNotFoundError`](./src/models/errors/getv2notesnoteidnotfounderror.ts): Not Found. Status code `404`. Applicable to 2 of 57 methods.*
* [`GetV2TasksTaskIdNotFoundError`](./src/models/errors/getv2taskstaskidnotfounderror.ts): Not Found. Status code `404`. Applicable to 2 of 57 methods.*
* [`GetV2WebhooksWebhookIdNotFoundError`](./src/models/errors/getv2webhookswebhookidnotfounderror.ts): Not Found. Status code `404`. Applicable to 2 of 57 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsSlugConflictError`](./src/models/errors/postv2targetidentifierattributesattributeoptionsslugconflicterror.ts): Conflict. Status code `409`. Applicable to 2 of 57 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesSlugConflictError`](./src/models/errors/postv2targetidentifierattributesattributestatusesslugconflicterror.ts): Conflict. Status code `409`. Applicable to 2 of 57 methods.*
* [`PatchV2ObjectsObjectValidationTypeError`](./src/models/errors/patchv2objectsobjectvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2TargetIdentifierAttributesValidationTypeError`](./src/models/errors/postv2targetidentifierattributesvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`SystemEditUnauthorizedError`](./src/models/errors/systemeditunauthorizederror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2TargetIdentifierAttributesAttributeOptionsValidationTypeError`](./src/models/errors/postv2targetidentifierattributesattributeoptionsvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeOptionsOptionInvalidRequestError`](./src/models/errors/patchv2targetidentifierattributesattributeoptionsoptioninvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`FilterError`](./src/models/errors/filtererror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2ObjectsObjectRecordsInvalidRequestError`](./src/models/errors/postv2objectsobjectrecordsinvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PutV2ObjectsObjectRecordsInvalidRequestError`](./src/models/errors/putv2objectsobjectrecordsinvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2ListsListEntriesInvalidRequestError`](./src/models/errors/postv2listslistentriesinvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`MultipleMatchResultsError`](./src/models/errors/multiplematchresultserror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2CommentsInvalidRequestError`](./src/models/errors/postv2commentsinvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2WebhooksValidationTypeError`](./src/models/errors/postv2webhooksvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PostV2TargetIdentifierAttributesAttributeStatusesValidationTypeError`](./src/models/errors/postv2targetidentifierattributesattributestatusesvalidationtypeerror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`PatchV2TargetIdentifierAttributesAttributeStatusesStatusInvalidRequestError`](./src/models/errors/patchv2targetidentifierattributesattributestatusesstatusinvalidrequesterror.ts): Bad Request. Status code `400`. Applicable to 1 of 57 methods.*
* [`BillingError`](./src/models/errors/billingerror.ts): Forbidden. Status code `403`. Applicable to 1 of 57 methods.*
* [`PostV2TargetIdentifierAttributesNotFoundError`](./src/models/errors/postv2targetidentifierattributesnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`PostV2ObjectsObjectRecordsQueryNotFoundError`](./src/models/errors/postv2objectsobjectrecordsquerynotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`PostV2ListsNotFoundError`](./src/models/errors/postv2listsnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`PostV2ListsListEntriesNotFoundError`](./src/models/errors/postv2listslistentriesnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`PutV2ListsListEntriesNotFoundError`](./src/models/errors/putv2listslistentriesnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`GetV2WorkspaceMembersWorkspaceMemberIdNotFoundError`](./src/models/errors/getv2workspacemembersworkspacememberidnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`PatchV2TasksTaskIdNotFoundError`](./src/models/errors/patchv2taskstaskidnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`GetV2ThreadsThreadIdNotFoundError`](./src/models/errors/getv2threadsthreadidnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`GetV2CommentsCommentIdNotFoundError`](./src/models/errors/getv2commentscommentidnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`DeleteV2CommentsCommentIdNotFoundError`](./src/models/errors/deletev2commentscommentidnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`DeleteV2WebhooksWebhookIdNotFoundError`](./src/models/errors/deletev2webhookswebhookidnotfounderror.ts): Not Found. Status code `404`. Applicable to 1 of 57 methods.*
* [`PostV2ObjectsSlugConflictError`](./src/models/errors/postv2objectsslugconflicterror.ts): Conflict. Status code `409`. Applicable to 1 of 57 methods.*
* [`PatchV2ObjectsObjectSlugConflictError`](./src/models/errors/patchv2objectsobjectslugconflicterror.ts): Conflict. Status code `409`. Applicable to 1 of 57 methods.*
* [`PostV2TargetIdentifierAttributesSlugConflictError`](./src/models/errors/postv2targetidentifierattributesslugconflicterror.ts): Conflict. Status code `409`. Applicable to 1 of 57 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  serverURL: "https://api.attio.com",
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Attio } from "attio-js";
import { HTTPClient } from "attio-js/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Attio({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Attio } from "attio-js";

const sdk = new Attio({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ATTIO_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=attio-js&utm_campaign=typescript)
