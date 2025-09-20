# Tasks
(*tasks*)

## Overview

A task is a defined, actionable item with references to linked records and assigned workspace members.

### Available Operations

* [list](#list) - List tasks
* [create](#create) - Create a task
* [get](#get) - Get a task
* [update](#update) - Update a task
* [delete](#delete) - Delete a task

## list

List all tasks. Results are sorted by creation date, from oldest to newest.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/tasks" method="get" path="/v2/tasks" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.tasks.list({
    limit: 10,
    offset: 5,
    sort: "created_at:desc",
    linkedObject: "people",
    linkedRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    assignee: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    isCompleted: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { tasksList } from "attio-js/funcs/tasksList.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await tasksList(attio, {
    limit: 10,
    offset: 5,
    sort: "created_at:desc",
    linkedObject: "people",
    linkedRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    assignee: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    isCompleted: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TasksRequest](../../models/operations/getv2tasksrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TasksResponse](../../models/operations/getv2tasksresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Creates a new task.

At present, tasks can only be created from plaintext without record reference formatting.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/tasks" method="post" path="/v2/tasks" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.tasks.create({
    data: {
      content: "Follow up on current software solutions",
      format: "plaintext",
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [],
      assignees: [],
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
import { tasksCreate } from "attio-js/funcs/tasksCreate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await tasksCreate(attio, {
    data: {
      content: "Follow up on current software solutions",
      format: "plaintext",
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [],
      assignees: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TasksRequest](../../models/operations/postv2tasksrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TasksResponse](../../models/operations/postv2tasksresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PostV2TasksValidationTypeError  | 400                                    | application/json                       |
| errors.GetV2ObjectsObjectNotFoundError | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## get

Get a single task by ID.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/tasks/{task_id}" method="get" path="/v2/tasks/{task_id}" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.tasks.get({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { tasksGet } from "attio-js/funcs/tasksGet.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await tasksGet(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TasksTaskIdRequest](../../models/operations/getv2taskstaskidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TasksTaskIdResponse](../../models/operations/getv2taskstaskidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetV2TasksTaskIdNotFoundError | 404                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## update

Updates an existing task by `task_id`. At present, only the `deadline_at`, `is_completed`, `linked_records`, and `assignees` fields can be updated.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/tasks/{task_id}" method="patch" path="/v2/tasks/{task_id}" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.tasks.update({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    requestBody: {
      data: {
        deadlineAt: "2023-01-01T15:00:00.000000000Z",
        isCompleted: false,
        linkedRecords: [
          {
            targetObject: "people",
            slugOrIdOfMatchingAttribute: [],
          },
        ],
        assignees: [
          {
            workspaceMemberEmailAddress: "alice@attio.com",
          },
        ],
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
import { tasksUpdate } from "attio-js/funcs/tasksUpdate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await tasksUpdate(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    requestBody: {
      data: {
        deadlineAt: "2023-01-01T15:00:00.000000000Z",
        isCompleted: false,
        linkedRecords: [
          {
            targetObject: "people",
            slugOrIdOfMatchingAttribute: [],
          },
        ],
        assignees: [
          {
            workspaceMemberEmailAddress: "alice@attio.com",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TasksTaskIdRequest](../../models/operations/patchv2taskstaskidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TasksTaskIdResponse](../../models/operations/patchv2taskstaskidresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PostV2TasksValidationTypeError  | 400                                    | application/json                       |
| errors.PatchV2TasksTaskIdNotFoundError | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## delete

Delete a task by ID.

Required scopes: `task:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v2/tasks/{task_id}" method="delete" path="/v2/tasks/{task_id}" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.tasks.delete({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { tasksDelete } from "attio-js/funcs/tasksDelete.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await tasksDelete(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2TasksTaskIdRequest](../../models/operations/deletev2taskstaskidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2TasksTaskIdResponse](../../models/operations/deletev2taskstaskidresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.GetV2TasksTaskIdNotFoundError | 404                                  | application/json                     |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |