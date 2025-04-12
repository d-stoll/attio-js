# Threads
(*threads*)

## Overview

Threads are groups of [comments](/reference/get_v2-comments-comment-id) on either a record or entry.

### Available Operations

* [getV2Threads](#getv2threads) - List threads
* [getV2ThreadsThreadId](#getv2threadsthreadid) - Get a thread

## getV2Threads

List threads of comments on a record or list entry.

To view threads on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view threads on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.threads.getV2Threads({
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    object: "people",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    limit: 10,
    offset: 5,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { threadsGetV2Threads } from "attio-js/funcs/threadsGetV2Threads.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await threadsGetV2Threads(attio, {
    recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    object: "people",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    limit: 10,
    offset: 5,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ThreadsRequest](../../models/operations/getv2threadsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ThreadsResponseBody](../../models/operations/getv2threadsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getV2ThreadsThreadId

Get all comments in a thread.

To view threads on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view threads on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.threads.getV2ThreadsThreadId({
    threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { threadsGetV2ThreadsThreadId } from "attio-js/funcs/threadsGetV2ThreadsThreadId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await threadsGetV2ThreadsThreadId(attio, {
    threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ThreadsThreadIdRequest](../../models/operations/getv2threadsthreadidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ThreadsThreadIdResponseBody](../../models/operations/getv2threadsthreadidresponsebody.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.GetV2ThreadsThreadIdResponseBody | 404                                     | application/json                        |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |