# Comments
(*comments*)

## Overview

Comments are messages on a [thread](/reference/get_v2-threads).

### Available Operations

* [postV2Comments](#postv2comments) - Create a comment
* [getV2CommentsCommentId](#getv2commentscommentid) - Get a comment
* [deleteV2CommentsCommentId](#deletev2commentscommentid) - Delete a comment

## postV2Comments

Creates a new comment related to an existing thread, record or entry.

To create comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To create comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.comments.postV2Comments({
    data: {
      format: "plaintext",
      content: "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
      author: {
        type: "workspace-member",
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      createdAt: "2023-01-01T15:00:00.000000000Z",
      record: {
        object: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
      },
    },
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
import { commentsPostV2Comments } from "attio-js/funcs/commentsPostV2Comments.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await commentsPostV2Comments(attio, {
    data: {
      format: "plaintext",
      content: "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
      author: {
        type: "workspace-member",
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
      createdAt: "2023-01-01T15:00:00.000000000Z",
      record: {
        object: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
      },
    },
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
| `request`                                                                                                                                                                      | [operations.PostV2CommentsRequestBody](../../models/operations/postv2commentsrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2CommentsResponseBody](../../models/operations/postv2commentsresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PostV2CommentsResponseBody | 400                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## getV2CommentsCommentId

Get a single comment by ID.

To view comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.comments.getV2CommentsCommentId({
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
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
import { commentsGetV2CommentsCommentId } from "attio-js/funcs/commentsGetV2CommentsCommentId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await commentsGetV2CommentsCommentId(attio, {
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
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
| `request`                                                                                                                                                                      | [operations.GetV2CommentsCommentIdRequest](../../models/operations/getv2commentscommentidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2CommentsCommentIdResponseBody](../../models/operations/getv2commentscommentidresponsebody.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetV2CommentsCommentIdResponseBody | 404                                       | application/json                          |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |

## deleteV2CommentsCommentId

Deletes a comment by ID. If deleting a comment at the head of a thread, all messages in the thread are also deleted.

Required scopes: `comment:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.comments.deleteV2CommentsCommentId({
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
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
import { commentsDeleteV2CommentsCommentId } from "attio-js/funcs/commentsDeleteV2CommentsCommentId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await commentsDeleteV2CommentsCommentId(attio, {
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
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
| `request`                                                                                                                                                                      | [operations.DeleteV2CommentsCommentIdRequest](../../models/operations/deletev2commentscommentidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2CommentsCommentIdResponseBody](../../models/operations/deletev2commentscommentidresponsebody.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.DeleteV2CommentsCommentIdResponseBody | 404                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |