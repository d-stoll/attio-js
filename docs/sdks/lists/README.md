# Lists
(*lists*)

## Overview

Lists are used to model a particular process. A list contains many records of a single object type, where each record is represented by an entry. Entries contain their own data from attributes defined on the list and also data from their parent record. See our [data model guide](/docs/data-model) for more information.

### Available Operations

* [getV2Lists](#getv2lists) - List all lists
* [postV2Lists](#postv2lists) - Create a list
* [getV2ListsList](#getv2listslist) - Get a list
* [patchV2ListsList](#patchv2listslist) - Update a list

## getV2Lists

List all lists that your access token has access to. lists are returned in the order that they are sorted in the sidebar.

Required scopes: `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.getV2Lists();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { listsGetV2Lists } from "attio-js/funcs/listsGetV2Lists.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsGetV2Lists(attio);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ListsResponseBody](../../models/operations/getv2listsresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## postV2Lists

Creates a new list.

Once you have your list, add attributes to it using the [Create attribute](/reference/post_v2-target-identifier-attributes) API, and add records to it using the [Add records to list](/reference/post_v2-lists-list-entries) API. 

New lists must specify which records can be added with the `parent_object` parameter which accepts either an object slug or an object ID. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters.

Please note that new lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member-level access for lists.

Required scopes: `list_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.postV2Lists({
    data: {
      name: "Enterprise Sales",
      apiSlug: "enterprise_sales",
      parentObject: "people",
      workspaceAccess: "read-and-write",
      workspaceMemberAccess: [
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
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
import { listsPostV2Lists } from "attio-js/funcs/listsPostV2Lists.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsPostV2Lists(attio, {
    data: {
      name: "Enterprise Sales",
      apiSlug: "enterprise_sales",
      parentObject: "people",
      workspaceAccess: "read-and-write",
      workspaceMemberAccess: [
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
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
| `request`                                                                                                                                                                      | [operations.PostV2ListsRequestBody](../../models/operations/postv2listsrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ListsResponseBody](../../models/operations/postv2listsresponsebody.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.PostV2ListsResponseBody              | 400                                         | application/json                            |
| errors.PostV2ListsListsResponseBody         | 403                                         | application/json                            |
| errors.PostV2ListsListsResponseResponseBody | 404                                         | application/json                            |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## getV2ListsList

Gets a single list in your workspace that your access token has access to.

Required scopes: `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.getV2ListsList({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
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
import { listsGetV2ListsList } from "attio-js/funcs/listsGetV2ListsList.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsGetV2ListsList(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
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
| `request`                                                                                                                                                                      | [operations.GetV2ListsListRequest](../../models/operations/getv2listslistrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ListsListResponseBody](../../models/operations/getv2listslistresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.GetV2ListsListResponseBody | 404                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## patchV2ListsList

Updates an existing list. Permissions for the list are controlled with the `workspace_access` and `workspace_member_access` parameters. Please note that lists must have either `workspace_access` set to `"full-access"` or one or more element of `workspace_member_access` with a `"full-access"` level. It is also possible to receive a `403` billing error if your workspace is not on a plan that supports either advanced workspace or workspace member level access for lists. Changing the parent object of a list is not possible through the API as it can have unintended side-effects that should be considered carefully. If you wish to carry out a parent object change you should do so through the UI.

Required scopes: `list_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.lists.patchV2ListsList({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      data: {
        name: "Enterprise Sales",
        apiSlug: "enterprise_sales",
        workspaceAccess: "read-and-write",
        workspaceMemberAccess: [
          {
            workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            level: "read-and-write",
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
import { listsPatchV2ListsList } from "attio-js/funcs/listsPatchV2ListsList.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await listsPatchV2ListsList(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      data: {
        name: "Enterprise Sales",
        apiSlug: "enterprise_sales",
        workspaceAccess: "read-and-write",
        workspaceMemberAccess: [
          {
            workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            level: "read-and-write",
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
| `request`                                                                                                                                                                      | [operations.PatchV2ListsListRequest](../../models/operations/patchv2listslistrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2ListsListResponseBody](../../models/operations/patchv2listslistresponsebody.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.PatchV2ListsListResponseBody      | 400                                      | application/json                         |
| errors.PatchV2ListsListListsResponseBody | 404                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |