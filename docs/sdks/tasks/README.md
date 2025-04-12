# Tasks
(*tasks*)

## Overview

A task is a defined, actionable item with references to linked records and assigned workspace members.

### Available Operations

* [getV2Tasks](#getv2tasks) - List tasks
* [postV2Tasks](#postv2tasks) - Create a task
* [getV2TasksTaskId](#getv2taskstaskid) - Get a task
* [patchV2TasksTaskId](#patchv2taskstaskid) - Update a task
* [deleteV2TasksTaskId](#deletev2taskstaskid) - Delete a task

## getV2Tasks

List all tasks. Results are sorted by creation date, from oldest to newest.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.getV2Tasks({
    limit: 10,
    offset: 5,
    sort: "created_at:desc",
    linkedObject: "people",
    linkedRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    assignee: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    isCompleted: true,
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
import { tasksGetV2Tasks } from "attio-js/funcs/tasksGetV2Tasks.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksGetV2Tasks(attio, {
    limit: 10,
    offset: 5,
    sort: "created_at:desc",
    linkedObject: "people",
    linkedRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    assignee: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    isCompleted: true,
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
| `request`                                                                                                                                                                      | [operations.GetV2TasksRequest](../../models/operations/getv2tasksrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TasksResponseBody](../../models/operations/getv2tasksresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV2Tasks

Creates a new task.

At present, tasks can only be created from plaintext without record reference formatting.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.postV2Tasks({
    data: {
      content: "Follow up on current software solutions",
      format: "plaintext",
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [
        {
          targetObject: "people",
          slugOrIdOfMatchingAttribute: [
            {
              domain: "app.attio.com",
            },
          ],
        },
      ],
      assignees: [

      ],
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
import { tasksPostV2Tasks } from "attio-js/funcs/tasksPostV2Tasks.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksPostV2Tasks(attio, {
    data: {
      content: "Follow up on current software solutions",
      format: "plaintext",
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [
        {
          targetObject: "people",
          slugOrIdOfMatchingAttribute: [
            {
              domain: "app.attio.com",
            },
          ],
        },
      ],
      assignees: [
  
      ],
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
| `request`                                                                                                                                                                      | [operations.PostV2TasksRequestBody](../../models/operations/postv2tasksrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TasksResponseBody](../../models/operations/postv2tasksresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.PostV2TasksResponseBody      | 400                                 | application/json                    |
| errors.PostV2TasksTasksResponseBody | 404                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## getV2TasksTaskId

Get a single task by ID.

Required scopes: `task:read`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.getV2TasksTaskId({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
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
import { tasksGetV2TasksTaskId } from "attio-js/funcs/tasksGetV2TasksTaskId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksGetV2TasksTaskId(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
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
| `request`                                                                                                                                                                      | [operations.GetV2TasksTaskIdRequest](../../models/operations/getv2taskstaskidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TasksTaskIdResponseBody](../../models/operations/getv2taskstaskidresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetV2TasksTaskIdResponseBody | 404                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## patchV2TasksTaskId

Updates an existing task by `task_id`. At present, only the `deadline_at`, `is_completed`, `linked_records`, and `assignees` fields can be updated.

Required scopes: `task:read-write`, `object_configuration:read`, `record_permission:read`, `user_management:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.patchV2TasksTaskId({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    requestBody: {
      data: {
        deadlineAt: "2023-01-01T15:00:00.000000000Z",
        isCompleted: false,
        linkedRecords: [
          {
            targetObject: "people",
            slugOrIdOfMatchingAttribute: [
              {},
              {
                value: 17224912,
              },
              {},
            ],
          },
          {
            targetObject: "people",
            targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
          },
          {
            targetObject: "people",
            targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
          },
        ],
        assignees: [
          {
            workspaceMemberEmailAddress: "alice@attio.com",
          },
          {
            referencedActorType: "workspace-member",
            referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          },
          {
            referencedActorType: "workspace-member",
            referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          },
        ],
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
import { tasksPatchV2TasksTaskId } from "attio-js/funcs/tasksPatchV2TasksTaskId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksPatchV2TasksTaskId(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    requestBody: {
      data: {
        deadlineAt: "2023-01-01T15:00:00.000000000Z",
        isCompleted: false,
        linkedRecords: [
          {
            targetObject: "people",
            slugOrIdOfMatchingAttribute: [
              {},
              {
                value: 17224912,
              },
              {},
            ],
          },
          {
            targetObject: "people",
            targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
          },
          {
            targetObject: "people",
            targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
          },
        ],
        assignees: [
          {
            workspaceMemberEmailAddress: "alice@attio.com",
          },
          {
            referencedActorType: "workspace-member",
            referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          },
          {
            referencedActorType: "workspace-member",
            referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          },
        ],
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
| `request`                                                                                                                                                                      | [operations.PatchV2TasksTaskIdRequest](../../models/operations/patchv2taskstaskidrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TasksTaskIdResponseBody](../../models/operations/patchv2taskstaskidresponsebody.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.PatchV2TasksTaskIdResponseBody      | 400                                        | application/json                           |
| errors.PatchV2TasksTaskIdTasksResponseBody | 404                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## deleteV2TasksTaskId

Delete a task by ID.

Required scopes: `task:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.tasks.deleteV2TasksTaskId({
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
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
import { tasksDeleteV2TasksTaskId } from "attio-js/funcs/tasksDeleteV2TasksTaskId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await tasksDeleteV2TasksTaskId(attio, {
    taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
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
| `request`                                                                                                                                                                      | [operations.DeleteV2TasksTaskIdRequest](../../models/operations/deletev2taskstaskidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2TasksTaskIdResponseBody](../../models/operations/deletev2taskstaskidresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DeleteV2TasksTaskIdResponseBody | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |