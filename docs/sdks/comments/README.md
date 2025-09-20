# Comments
(*comments*)

## Overview

Comments are messages on a [thread](/reference/get_v2-threads).

### Available Operations

* [create](#create) - Create a comment
* [get](#get) - Get a comment
* [delete](#delete) - Delete a comment

## create

Creates a new comment related to an existing thread, record or entry.

To create comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To create comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/comments" method="post" path="/v2/comments" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.comments.create({
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

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { commentsCreate } from "attio-js/funcs/commentsCreate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await commentsCreate(attio, {
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2CommentsRequest](../../models/operations/postv2commentsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2CommentsResponse](../../models/operations/postv2commentsresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.PostV2CommentsInvalidRequestError | 400                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## get

Get a single comment by ID.

To view comments on records, you will need the `object_configuration:read` and `record_permission:read` scopes.

To view comments on list entries, you will need the `list_configuration:read` and `list_entry:read` scopes.

Required scopes: `comment:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/comments/{comment_id}" method="get" path="/v2/comments/{comment_id}" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.comments.get({
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { commentsGet } from "attio-js/funcs/commentsGet.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await commentsGet(attio, {
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentsGet failed:", res.error);
  }
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

**Promise\<[operations.GetV2CommentsCommentIdResponse](../../models/operations/getv2commentscommentidresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetV2CommentsCommentIdNotFoundError | 404                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## delete

Deletes a comment by ID. If deleting a comment at the head of a thread, all messages in the thread are also deleted.

Required scopes: `comment:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/comments/{comment_id}" method="delete" path="/v2/comments/{comment_id}" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.comments.delete({
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { commentsDelete } from "attio-js/funcs/commentsDelete.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await commentsDelete(attio, {
    commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commentsDelete failed:", res.error);
  }
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

**Promise\<[operations.DeleteV2CommentsCommentIdResponse](../../models/operations/deletev2commentscommentidresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.DeleteV2CommentsCommentIdNotFoundError | 404                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |