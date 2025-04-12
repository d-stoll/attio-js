# Javascript & Typescript SDK for Attio

Developer-friendly & type-safe JS/TS SDK based on the [official OpenAPI spec](https://developers.attio.com/docs/openapi) of Attio.

<!-- Start Summary [summary] -->
## Summary

Attio is a CRM platform which is highly customisable, incredibly powerful and data-driven. The public API allows you to manipulate records, lists, notes, tasks and more. You can find more information about the Attio API in the [official docs](https://developers.attio.com/docs/getting-started).

Unfortunately, an official JavaScript or TypeScript SDK has not been released yet. In the meantime, we maintain this unofficial SDK to bridge the gap until an official SDK becomes available.

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


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Attio": {
      "command": "npx",
      "args": [
        "-y", "--package", "attio-js",
        "--",
        "mcp", "start",
        "--oauth2", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Attio": {
      "command": "npx",
      "args": [
        "-y", "--package", "attio-js",
        "--",
        "mcp", "start",
        "--oauth2", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/d-stoll/attio-js/releases/download/v0.0.2/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package attio-js -- mcp start --help
```
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
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme       | Environment Variable |
| -------- | ------ | ------------ | -------------------- |
| `oauth2` | oauth2 | OAuth2 token | `ATTIO_OAUTH2`       |

To authenticate with the API the `oauth2` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  // Handle the result
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

* [getV2TargetIdentifierAttributes](docs/sdks/attributes/README.md#getv2targetidentifierattributes) - List attributes
* [postV2TargetIdentifierAttributes](docs/sdks/attributes/README.md#postv2targetidentifierattributes) - Create an attribute
* [getV2TargetIdentifierAttributesAttribute](docs/sdks/attributes/README.md#getv2targetidentifierattributesattribute) - Get an attribute
* [patchV2TargetIdentifierAttributesAttribute](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattribute) - Update an attribute
* [getV2TargetIdentifierAttributesAttributeOptions](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributeoptions) - List select options
* [postV2TargetIdentifierAttributesAttributeOptions](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributeoptions) - Create a select option
* [patchV2TargetIdentifierAttributesAttributeOptionsOption](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributeoptionsoption) - Update a select option
* [getV2TargetIdentifierAttributesAttributeStatuses](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributestatuses) - List statuses
* [postV2TargetIdentifierAttributesAttributeStatuses](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributestatuses) - Create a status
* [patchV2TargetIdentifierAttributesAttributeStatusesStatus](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributestatusesstatus) - Update a status

### [comments](docs/sdks/comments/README.md)

* [postV2Comments](docs/sdks/comments/README.md#postv2comments) - Create a comment
* [getV2CommentsCommentId](docs/sdks/comments/README.md#getv2commentscommentid) - Get a comment
* [deleteV2CommentsCommentId](docs/sdks/comments/README.md#deletev2commentscommentid) - Delete a comment

### [entries](docs/sdks/entries/README.md)

* [postV2ListsListEntriesQuery](docs/sdks/entries/README.md#postv2listslistentriesquery) - List entries
* [postV2ListsListEntries](docs/sdks/entries/README.md#postv2listslistentries) - Create an entry (add record to list)
* [putV2ListsListEntries](docs/sdks/entries/README.md#putv2listslistentries) - Assert a list entry by parent
* [getV2ListsListEntriesEntryId](docs/sdks/entries/README.md#getv2listslistentriesentryid) - Get a list entry
* [patchV2ListsListEntriesEntryId](docs/sdks/entries/README.md#patchv2listslistentriesentryid) - Update a list entry (append multiselect values)
* [putV2ListsListEntriesEntryId](docs/sdks/entries/README.md#putv2listslistentriesentryid) - Update a list entry (overwrite multiselect values)
* [deleteV2ListsListEntriesEntryId](docs/sdks/entries/README.md#deletev2listslistentriesentryid) - Delete a list entry
* [getV2ListsListEntriesEntryIdAttributesAttributeValues](docs/sdks/entries/README.md#getv2listslistentriesentryidattributesattributevalues) - List attribute values for a list entry

### [lists](docs/sdks/lists/README.md)

* [getV2Lists](docs/sdks/lists/README.md#getv2lists) - List all lists
* [postV2Lists](docs/sdks/lists/README.md#postv2lists) - Create a list
* [getV2ListsList](docs/sdks/lists/README.md#getv2listslist) - Get a list
* [patchV2ListsList](docs/sdks/lists/README.md#patchv2listslist) - Update a list

### [meta](docs/sdks/meta/README.md)

* [getV2Self](docs/sdks/meta/README.md#getv2self) - Identify

### [notes](docs/sdks/notes/README.md)

* [getV2Notes](docs/sdks/notes/README.md#getv2notes) - List notes
* [postV2Notes](docs/sdks/notes/README.md#postv2notes) - Create a note
* [getV2NotesNoteId](docs/sdks/notes/README.md#getv2notesnoteid) - Get a note
* [deleteV2NotesNoteId](docs/sdks/notes/README.md#deletev2notesnoteid) - Delete a note

### [objects](docs/sdks/objects/README.md)

* [getV2Objects](docs/sdks/objects/README.md#getv2objects) - List objects
* [postV2Objects](docs/sdks/objects/README.md#postv2objects) - Create an object
* [getV2ObjectsObject](docs/sdks/objects/README.md#getv2objectsobject) - Get an object
* [patchV2ObjectsObject](docs/sdks/objects/README.md#patchv2objectsobject) - Update an object

### [records](docs/sdks/records/README.md)

* [postV2ObjectsObjectRecordsQuery](docs/sdks/records/README.md#postv2objectsobjectrecordsquery) - List records
* [postV2ObjectsObjectRecords](docs/sdks/records/README.md#postv2objectsobjectrecords) - Create a record
* [putV2ObjectsObjectRecords](docs/sdks/records/README.md#putv2objectsobjectrecords) - Assert a record
* [getV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordid) - Get a record
* [patchV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#patchv2objectsobjectrecordsrecordid) - Update a record (append multiselect values)
* [putV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#putv2objectsobjectrecordsrecordid) - Update a record (overwrite multiselect values)
* [deleteV2ObjectsObjectRecordsRecordId](docs/sdks/records/README.md#deletev2objectsobjectrecordsrecordid) - Delete a record
* [getV2ObjectsObjectRecordsRecordIdAttributesAttributeValues](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidattributesattributevalues) - List record attribute values
* [getV2ObjectsObjectRecordsRecordIdEntries](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidentries) - List record entries

### [tasks](docs/sdks/tasks/README.md)

* [getV2Tasks](docs/sdks/tasks/README.md#getv2tasks) - List tasks
* [postV2Tasks](docs/sdks/tasks/README.md#postv2tasks) - Create a task
* [getV2TasksTaskId](docs/sdks/tasks/README.md#getv2taskstaskid) - Get a task
* [patchV2TasksTaskId](docs/sdks/tasks/README.md#patchv2taskstaskid) - Update a task
* [deleteV2TasksTaskId](docs/sdks/tasks/README.md#deletev2taskstaskid) - Delete a task

### [threads](docs/sdks/threads/README.md)

* [getV2Threads](docs/sdks/threads/README.md#getv2threads) - List threads
* [getV2ThreadsThreadId](docs/sdks/threads/README.md#getv2threadsthreadid) - Get a thread

### [webhooks](docs/sdks/webhooks/README.md)

* [getV2Webhooks](docs/sdks/webhooks/README.md#getv2webhooks) - List webhooks
* [postV2Webhooks](docs/sdks/webhooks/README.md#postv2webhooks) - Create a webhook
* [getV2WebhooksWebhookId](docs/sdks/webhooks/README.md#getv2webhookswebhookid) - Get a webhook
* [patchV2WebhooksWebhookId](docs/sdks/webhooks/README.md#patchv2webhookswebhookid) - Update a webhook
* [deleteV2WebhooksWebhookId](docs/sdks/webhooks/README.md#deletev2webhookswebhookid) - Delete a webhook

### [workspaceMembers](docs/sdks/workspacemembers/README.md)

* [getV2WorkspaceMembers](docs/sdks/workspacemembers/README.md#getv2workspacemembers) - List workspace members
* [getV2WorkspaceMembersWorkspaceMemberId](docs/sdks/workspacemembers/README.md#getv2workspacemembersworkspacememberid) - Get a workspace member

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

- [`attributesGetV2TargetIdentifierAttributes`](docs/sdks/attributes/README.md#getv2targetidentifierattributes) - List attributes
- [`attributesGetV2TargetIdentifierAttributesAttribute`](docs/sdks/attributes/README.md#getv2targetidentifierattributesattribute) - Get an attribute
- [`attributesGetV2TargetIdentifierAttributesAttributeOptions`](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributeoptions) - List select options
- [`attributesGetV2TargetIdentifierAttributesAttributeStatuses`](docs/sdks/attributes/README.md#getv2targetidentifierattributesattributestatuses) - List statuses
- [`attributesPatchV2TargetIdentifierAttributesAttribute`](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattribute) - Update an attribute
- [`attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption`](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributeoptionsoption) - Update a select option
- [`attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus`](docs/sdks/attributes/README.md#patchv2targetidentifierattributesattributestatusesstatus) - Update a status
- [`attributesPostV2TargetIdentifierAttributes`](docs/sdks/attributes/README.md#postv2targetidentifierattributes) - Create an attribute
- [`attributesPostV2TargetIdentifierAttributesAttributeOptions`](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributeoptions) - Create a select option
- [`attributesPostV2TargetIdentifierAttributesAttributeStatuses`](docs/sdks/attributes/README.md#postv2targetidentifierattributesattributestatuses) - Create a status
- [`commentsDeleteV2CommentsCommentId`](docs/sdks/comments/README.md#deletev2commentscommentid) - Delete a comment
- [`commentsGetV2CommentsCommentId`](docs/sdks/comments/README.md#getv2commentscommentid) - Get a comment
- [`commentsPostV2Comments`](docs/sdks/comments/README.md#postv2comments) - Create a comment
- [`entriesDeleteV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#deletev2listslistentriesentryid) - Delete a list entry
- [`entriesGetV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#getv2listslistentriesentryid) - Get a list entry
- [`entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues`](docs/sdks/entries/README.md#getv2listslistentriesentryidattributesattributevalues) - List attribute values for a list entry
- [`entriesPatchV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#patchv2listslistentriesentryid) - Update a list entry (append multiselect values)
- [`entriesPostV2ListsListEntries`](docs/sdks/entries/README.md#postv2listslistentries) - Create an entry (add record to list)
- [`entriesPostV2ListsListEntriesQuery`](docs/sdks/entries/README.md#postv2listslistentriesquery) - List entries
- [`entriesPutV2ListsListEntries`](docs/sdks/entries/README.md#putv2listslistentries) - Assert a list entry by parent
- [`entriesPutV2ListsListEntriesEntryId`](docs/sdks/entries/README.md#putv2listslistentriesentryid) - Update a list entry (overwrite multiselect values)
- [`listsGetV2Lists`](docs/sdks/lists/README.md#getv2lists) - List all lists
- [`listsGetV2ListsList`](docs/sdks/lists/README.md#getv2listslist) - Get a list
- [`listsPatchV2ListsList`](docs/sdks/lists/README.md#patchv2listslist) - Update a list
- [`listsPostV2Lists`](docs/sdks/lists/README.md#postv2lists) - Create a list
- [`metaGetV2Self`](docs/sdks/meta/README.md#getv2self) - Identify
- [`notesDeleteV2NotesNoteId`](docs/sdks/notes/README.md#deletev2notesnoteid) - Delete a note
- [`notesGetV2Notes`](docs/sdks/notes/README.md#getv2notes) - List notes
- [`notesGetV2NotesNoteId`](docs/sdks/notes/README.md#getv2notesnoteid) - Get a note
- [`notesPostV2Notes`](docs/sdks/notes/README.md#postv2notes) - Create a note
- [`objectsGetV2Objects`](docs/sdks/objects/README.md#getv2objects) - List objects
- [`objectsGetV2ObjectsObject`](docs/sdks/objects/README.md#getv2objectsobject) - Get an object
- [`objectsPatchV2ObjectsObject`](docs/sdks/objects/README.md#patchv2objectsobject) - Update an object
- [`objectsPostV2Objects`](docs/sdks/objects/README.md#postv2objects) - Create an object
- [`recordsDeleteV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#deletev2objectsobjectrecordsrecordid) - Delete a record
- [`recordsGetV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordid) - Get a record
- [`recordsGetV2ObjectsObjectRecordsRecordIdAttributesAttributeValues`](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidattributesattributevalues) - List record attribute values
- [`recordsGetV2ObjectsObjectRecordsRecordIdEntries`](docs/sdks/records/README.md#getv2objectsobjectrecordsrecordidentries) - List record entries
- [`recordsPatchV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#patchv2objectsobjectrecordsrecordid) - Update a record (append multiselect values)
- [`recordsPostV2ObjectsObjectRecords`](docs/sdks/records/README.md#postv2objectsobjectrecords) - Create a record
- [`recordsPostV2ObjectsObjectRecordsQuery`](docs/sdks/records/README.md#postv2objectsobjectrecordsquery) - List records
- [`recordsPutV2ObjectsObjectRecords`](docs/sdks/records/README.md#putv2objectsobjectrecords) - Assert a record
- [`recordsPutV2ObjectsObjectRecordsRecordId`](docs/sdks/records/README.md#putv2objectsobjectrecordsrecordid) - Update a record (overwrite multiselect values)
- [`tasksDeleteV2TasksTaskId`](docs/sdks/tasks/README.md#deletev2taskstaskid) - Delete a task
- [`tasksGetV2Tasks`](docs/sdks/tasks/README.md#getv2tasks) - List tasks
- [`tasksGetV2TasksTaskId`](docs/sdks/tasks/README.md#getv2taskstaskid) - Get a task
- [`tasksPatchV2TasksTaskId`](docs/sdks/tasks/README.md#patchv2taskstaskid) - Update a task
- [`tasksPostV2Tasks`](docs/sdks/tasks/README.md#postv2tasks) - Create a task
- [`threadsGetV2Threads`](docs/sdks/threads/README.md#getv2threads) - List threads
- [`threadsGetV2ThreadsThreadId`](docs/sdks/threads/README.md#getv2threadsthreadid) - Get a thread
- [`webhooksDeleteV2WebhooksWebhookId`](docs/sdks/webhooks/README.md#deletev2webhookswebhookid) - Delete a webhook
- [`webhooksGetV2Webhooks`](docs/sdks/webhooks/README.md#getv2webhooks) - List webhooks
- [`webhooksGetV2WebhooksWebhookId`](docs/sdks/webhooks/README.md#getv2webhookswebhookid) - Get a webhook
- [`webhooksPatchV2WebhooksWebhookId`](docs/sdks/webhooks/README.md#patchv2webhookswebhookid) - Update a webhook
- [`webhooksPostV2Webhooks`](docs/sdks/webhooks/README.md#postv2webhooks) - Create a webhook
- [`workspaceMembersGetV2WorkspaceMembers`](docs/sdks/workspacemembers/README.md#getv2workspacemembers) - List workspace members
- [`workspaceMembersGetV2WorkspaceMembersWorkspaceMemberId`](docs/sdks/workspacemembers/README.md#getv2workspacemembersworkspacememberid) - Get a workspace member

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects({
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

  // Handle the result
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
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `postV2Objects` method may throw the following errors:

| Error Type                       | Status Code | Content Type     |
| -------------------------------- | ----------- | ---------------- |
| errors.PostV2ObjectsResponseBody | 409         | application/json |
| errors.APIError                  | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Attio } from "attio-js";
import {
  PostV2ObjectsResponseBody,
  SDKValidationError,
} from "attio-js/models/errors";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  let result;
  try {
    result = await attio.objects.postV2Objects({
      data: {
        apiSlug: "people",
        singularNoun: "Person",
        pluralNoun: "People",
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof PostV2ObjectsResponseBody): {
        // Handle err.data$: PostV2ObjectsResponseBodyData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  serverURL: "https://api.attio.com",
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.objects.getV2Objects();

  // Handle the result
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

const sdk = new Attio({ httpClient });
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
