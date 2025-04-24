# Javascript & Typescript SDK for Attio

Developer-friendly & type-safe JS/TS SDK based on the [official OpenAPI spec](https://developers.attio.com/docs/openapi) of Attio.

<!-- Start Summary [summary] -->
## Summary


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
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
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
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add attio-js
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add attio-js
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add attio-js zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

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

#### [entries.attributes](docs/sdks/attioentriesattributes/README.md)


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

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useAttributesCreateMutation`](docs/sdks/attributes/README.md#create) - Create an attribute
- [`useAttributesCreateSelectOptionMutation`](docs/sdks/attributes/README.md#createselectoption) - Create a select option
- [`useAttributesGet`](docs/sdks/attributes/README.md#get) - Get an attribute
- [`useAttributesList`](docs/sdks/attributes/README.md#list) - List attributes
- [`useAttributesListSelectOptions`](docs/sdks/attributes/README.md#listselectoptions) - List select options
- [`useAttributesListStatuses`](docs/sdks/attributes/README.md#liststatuses) - List statuses
- [`useAttributesStatusesCreateMutation`](docs/sdks/statuses/README.md#create) - Create a status
- [`useAttributesStatusesUpdateMutation`](docs/sdks/statuses/README.md#update) - Update a status
- [`useAttributesUpdateMutation`](docs/sdks/attributes/README.md#update) - Update an attribute
- [`useAttributesUpdateOptionMutation`](docs/sdks/attributes/README.md#updateoption) - Update a select option
- [`useCommentsCreateMutation`](docs/sdks/comments/README.md#create) - Create a comment
- [`useCommentsDeleteMutation`](docs/sdks/comments/README.md#delete) - Delete a comment
- [`useCommentsGet`](docs/sdks/comments/README.md#get) - Get a comment
- [`useEntriesAssertMutation`](docs/sdks/entries/README.md#assert) - Assert a list entry by parent
- [`useEntriesAttributesValuesList`](docs/sdks/values/README.md#list) - List attribute values for a list entry
- [`useEntriesCreateMutation`](docs/sdks/entries/README.md#create) - Create an entry (add record to list)
- [`useEntriesDeleteMutation`](docs/sdks/entries/README.md#delete) - Delete a list entry
- [`useEntriesGetEntry`](docs/sdks/entries/README.md#getentry) - Get a list entry
- [`useEntriesOverwriteMutation`](docs/sdks/entries/README.md#overwrite) - Update a list entry (overwrite multiselect values)
- [`useEntriesQueryMutation`](docs/sdks/entries/README.md#query) - List entries
- [`useEntriesUpdateMutation`](docs/sdks/entries/README.md#update) - Update a list entry (append multiselect values)
- [`useListsCreateMutation`](docs/sdks/lists/README.md#create) - Create a list
- [`useListsGet`](docs/sdks/lists/README.md#get) - Get a list
- [`useListsListAll`](docs/sdks/lists/README.md#listall) - List all lists
- [`useListsUpdateMutation`](docs/sdks/lists/README.md#update) - Update a list
- [`useMetaIdentify`](docs/sdks/meta/README.md#identify) - Identify
- [`useNotesCreateMutation`](docs/sdks/notes/README.md#create) - Create a note
- [`useNotesDeleteMutation`](docs/sdks/notes/README.md#delete) - Delete a note
- [`useNotesGet`](docs/sdks/notes/README.md#get) - Get a note
- [`useNotesList`](docs/sdks/notes/README.md#list) - List notes
- [`useObjectsCreateMutation`](docs/sdks/objects/README.md#create) - Create an object
- [`useObjectsGet`](docs/sdks/objects/README.md#get) - Get an object
- [`useObjectsList`](docs/sdks/objects/README.md#list) - List objects
- [`useObjectsPartialUpdateMutation`](docs/sdks/objects/README.md#partialupdate) - Update an object
- [`useRecordsAssertMutation`](docs/sdks/records/README.md#assert) - Assert a record
- [`useRecordsCreateMutation`](docs/sdks/records/README.md#create) - Create a record
- [`useRecordsDeleteMutation`](docs/sdks/records/README.md#delete) - Delete a record
- [`useRecordsGet`](docs/sdks/records/README.md#get) - Get a record
- [`useRecordsListAttributeValues`](docs/sdks/records/README.md#listattributevalues) - List record attribute values
- [`useRecordsListEntries`](docs/sdks/records/README.md#listentries) - List record entries
- [`useRecordsPartialUpdateMutation`](docs/sdks/records/README.md#partialupdate) - Update a record (append multiselect values)
- [`useRecordsQueryMutation`](docs/sdks/records/README.md#query) - List records
- [`useRecordsUpdateMutation`](docs/sdks/records/README.md#update) - Update a record (overwrite multiselect values)
- [`useTasksCreateMutation`](docs/sdks/tasks/README.md#create) - Create a task
- [`useTasksDeleteMutation`](docs/sdks/tasks/README.md#delete) - Delete a task
- [`useTasksGet`](docs/sdks/tasks/README.md#get) - Get a task
- [`useTasksList`](docs/sdks/tasks/README.md#list) - List tasks
- [`useTasksUpdateMutation`](docs/sdks/tasks/README.md#update) - Update a task
- [`useThreadsGet`](docs/sdks/threads/README.md#get) - Get a thread
- [`useThreadsList`](docs/sdks/threads/README.md#list) - List threads
- [`useWebhooksCreateMutation`](docs/sdks/webhooks/README.md#create) - Create a webhook
- [`useWebhooksDeleteMutation`](docs/sdks/webhooks/README.md#delete) - Delete a webhook
- [`useWebhooksGet`](docs/sdks/webhooks/README.md#get) - Get a webhook
- [`useWebhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`useWebhooksPartialUpdateMutation`](docs/sdks/webhooks/README.md#partialupdate) - Update a webhook
- [`useWorkspaceMembersGet`](docs/sdks/workspacemembers/README.md#get) - Get a workspace member
- [`useWorkspaceMembersList`](docs/sdks/workspacemembers/README.md#list) - List workspace members

</details>
<!-- End React hooks with TanStack Query [react-query] -->

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
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `create` method may throw the following errors:

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
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await attio.objects.create({
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
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.objects.list();

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
