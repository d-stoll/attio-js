# Entries
(*entries*)

## Overview

Entries are elements in a list that reference a single parent record. Entries contain their own data from attributes defined on the list and also data from their parent record. See our [data model guide](/docs/data-model) for more information.

### Available Operations

* [query](#query) - List entries
* [create](#create) - Create an entry (add record to list)
* [assert](#assert) - Assert a list entry by parent
* [getEntry](#getentry) - Get a list entry
* [update](#update) - Update a list entry (append multiselect values)
* [overwrite](#overwrite) - Update a list entry (overwrite multiselect values)
* [delete](#delete) - Delete a list entry

## query

Lists entries in a given list, with the option to filter and sort results.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.query({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      filter: {
        "name": "Ada Lovelace",
      },
      sorts: [
        {
          direction: "asc",
          attribute: "name",
          field: "last_name",
        },
      ],
      limit: 500,
      offset: 0,
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
import { entriesQuery } from "attio-js/funcs/entriesQuery.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesQuery(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      filter: {
        "name": "Ada Lovelace",
      },
      sorts: [
        {
          direction: "asc",
          attribute: "name",
          field: "last_name",
        },
      ],
      limit: 500,
      offset: 0,
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEntriesQueryMutation
} from "attio-js/react-query/entriesQuery.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ListsListEntriesQueryRequest](../../models/operations/postv2listslistentriesqueryrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ListsListEntriesQueryResponseBody](../../models/operations/postv2listslistentriesqueryresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Response404ResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## create

Adds a record to a list as a new list entry. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.create({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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
import { entriesCreate } from "attio-js/funcs/entriesCreate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesCreate(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEntriesCreateMutation
} from "attio-js/react-query/entriesCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2ListsListEntriesRequest](../../models/operations/postv2listslistentriesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2ListsListEntriesResponseBody](../../models/operations/postv2listslistentriesresponsebody.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.PostV2ListsListEntriesResponseBody        | 400                                              | application/json                                 |
| errors.PostV2ListsListEntriesEntriesResponseBody | 404                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## assert

Use this endpoint to create or update a list entry for a given parent record. If an entry with the specified parent record is found, that entry will be updated. If no such entry is found, a new entry will be created instead. If there are multiple entries with the same parent record, this endpoint with return the "MULTIPLE_MATCH_RESULTS" error. When writing to multi-select attributes, all values will be either created or deleted as necessary to match the list of values supplied in the request body.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.assert({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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
import { entriesAssert } from "attio-js/funcs/entriesAssert.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesAssert(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    requestBody: {
      data: {
        parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        parentObject: "people",
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEntriesAssertMutation
} from "attio-js/react-query/entriesAssert.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV2ListsListEntriesRequest](../../models/operations/putv2listslistentriesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV2ListsListEntriesResponseBody](../../models/operations/putv2listslistentriesresponsebody.md)\>**

### Errors

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.PutV2ListsListEntriesResponseBody        | 400                                             | application/json                                |
| errors.PutV2ListsListEntriesEntriesResponseBody | 404                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## getEntry

Gets a single list entry by its `entry_id`.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.getEntry({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
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
import { entriesGetEntry } from "attio-js/funcs/entriesGetEntry.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesGetEntry(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Query hooks for fetching data.
  useEntriesGetEntry,
  useEntriesGetEntrySuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchEntriesGetEntry,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateEntriesGetEntry,
  invalidateAllEntriesGetEntry,
} from "attio-js/react-query/entriesGetEntry.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2ListsListEntriesEntryIdRequest](../../models/operations/getv2listslistentriesentryidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ListsListEntriesEntryIdResponseBody](../../models/operations/getv2listslistentriesentryidresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Response404ResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## update

Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.update({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    requestBody: {
      data: {
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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
import { entriesUpdate } from "attio-js/funcs/entriesUpdate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesUpdate(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    requestBody: {
      data: {
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEntriesUpdateMutation
} from "attio-js/react-query/entriesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2ListsListEntriesEntryIdRequest](../../models/operations/patchv2listslistentriesentryidrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2ListsListEntriesEntryIdResponseBody](../../models/operations/patchv2listslistentriesentryidresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.EntriesResponseBody     | 400                            | application/json               |
| errors.Response404ResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## overwrite

Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to add multiselect attribute values without removing those value that already exist.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.overwrite({
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    requestBody: {
      data: {
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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
import { entriesOverwrite } from "attio-js/funcs/entriesOverwrite.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesOverwrite(attio, {
    list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    requestBody: {
      data: {
        entryValues: {
          "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
            "Text value",
          ],
          "multiselect_attribute": [
            "Select option 1",
            "Select option 2",
          ],
        },
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEntriesOverwriteMutation
} from "attio-js/react-query/entriesOverwrite.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV2ListsListEntriesEntryIdRequest](../../models/operations/putv2listslistentriesentryidrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutV2ListsListEntriesEntryIdResponseBody](../../models/operations/putv2listslistentriesentryidresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.EntriesResponseBody     | 400                            | application/json               |
| errors.Response404ResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## delete

Deletes a single list entry by its `entry_id`.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.delete({
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
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
import { entriesDelete } from "attio-js/funcs/entriesDelete.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesDelete(attio, {
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
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

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useEntriesDeleteMutation
} from "attio-js/react-query/entriesDelete.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV2ListsListEntriesEntryIdRequest](../../models/operations/deletev2listslistentriesentryidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2ListsListEntriesEntryIdResponseBody](../../models/operations/deletev2listslistentriesentryidresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.Response404ResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |