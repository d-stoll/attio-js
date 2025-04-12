# Entries
(*entries*)

## Overview

Entries are elements in a list that reference a single parent record. Entries contain their own data from attributes defined on the list and also data from their parent record. See our [data model guide](/docs/data-model) for more information.

### Available Operations

* [postV2ListsListEntriesQuery](#postv2listslistentriesquery) - List entries
* [postV2ListsListEntries](#postv2listslistentries) - Create an entry (add record to list)
* [putV2ListsListEntries](#putv2listslistentries) - Assert a list entry by parent
* [getV2ListsListEntriesEntryId](#getv2listslistentriesentryid) - Get a list entry
* [patchV2ListsListEntriesEntryId](#patchv2listslistentriesentryid) - Update a list entry (append multiselect values)
* [putV2ListsListEntriesEntryId](#putv2listslistentriesentryid) - Update a list entry (overwrite multiselect values)
* [deleteV2ListsListEntriesEntryId](#deletev2listslistentriesentryid) - Delete a list entry
* [getV2ListsListEntriesEntryIdAttributesAttributeValues](#getv2listslistentriesentryidattributesattributevalues) - List attribute values for a list entry

## postV2ListsListEntriesQuery

Lists entries in a given list, with the option to filter and sort results.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.postV2ListsListEntriesQuery({
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
import { entriesPostV2ListsListEntriesQuery } from "attio-js/funcs/entriesPostV2ListsListEntriesQuery.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesPostV2ListsListEntriesQuery(attio, {
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

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.PostV2ListsListEntriesQueryResponseBody | 404                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## postV2ListsListEntries

Adds a record to a list as a new list entry. This endpoint will throw on conflicts of unique attributes. Multiple list entries are allowed for the same parent record

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.postV2ListsListEntries({
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
import { entriesPostV2ListsListEntries } from "attio-js/funcs/entriesPostV2ListsListEntries.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesPostV2ListsListEntries(attio, {
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

## putV2ListsListEntries

Use this endpoint to create or update a list entry for a given parent record. If an entry with the specified parent record is found, that entry will be updated. If no such entry is found, a new entry will be created instead. If there are multiple entries with the same parent record, this endpoint with return the "MULTIPLE_MATCH_RESULTS" error. When writing to multi-select attributes, all values will be either created or deleted as necessary to match the list of values supplied in the request body.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.putV2ListsListEntries({
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
import { entriesPutV2ListsListEntries } from "attio-js/funcs/entriesPutV2ListsListEntries.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesPutV2ListsListEntries(attio, {
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

## getV2ListsListEntriesEntryId

Gets a single list entry by its `entry_id`.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.getV2ListsListEntriesEntryId({
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
import { entriesGetV2ListsListEntriesEntryId } from "attio-js/funcs/entriesGetV2ListsListEntriesEntryId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesGetV2ListsListEntriesEntryId(attio, {
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

| Error Type                                      | Status Code                                     | Content Type                                    |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| errors.GetV2ListsListEntriesEntryIdResponseBody | 404                                             | application/json                                |
| errors.APIError                                 | 4XX, 5XX                                        | \*/\*                                           |

## patchV2ListsListEntriesEntryId

Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will be created and prepended to the list of values that already exist (if any). Use the `PUT` endpoint to overwrite or remove multiselect attribute values.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.patchV2ListsListEntriesEntryId({
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
import { entriesPatchV2ListsListEntriesEntryId } from "attio-js/funcs/entriesPatchV2ListsListEntriesEntryId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesPatchV2ListsListEntriesEntryId(attio, {
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

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.PatchV2ListsListEntriesEntryIdResponseBody        | 400                                                      | application/json                                         |
| errors.PatchV2ListsListEntriesEntryIdEntriesResponseBody | 404                                                      | application/json                                         |
| errors.APIError                                          | 4XX, 5XX                                                 | \*/\*                                                    |

## putV2ListsListEntriesEntryId

Use this endpoint to update list entries by `entry_id`. If the update payload includes multiselect attributes, the values supplied will overwrite/remove the list of values that already exist (if any). Use the `PATCH` endpoint to add multiselect attribute values without removing those value that already exist.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.putV2ListsListEntriesEntryId({
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
import { entriesPutV2ListsListEntriesEntryId } from "attio-js/funcs/entriesPutV2ListsListEntriesEntryId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesPutV2ListsListEntriesEntryId(attio, {
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

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.PutV2ListsListEntriesEntryIdResponseBody        | 400                                                    | application/json                                       |
| errors.PutV2ListsListEntriesEntryIdEntriesResponseBody | 404                                                    | application/json                                       |
| errors.APIError                                        | 4XX, 5XX                                               | \*/\*                                                  |

## deleteV2ListsListEntriesEntryId

Deletes a single list entry by its `entry_id`.

Required scopes: `list_entry:read-write`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.deleteV2ListsListEntriesEntryId({
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
import { entriesDeleteV2ListsListEntriesEntryId } from "attio-js/funcs/entriesDeleteV2ListsListEntriesEntryId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesDeleteV2ListsListEntriesEntryId(attio, {
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

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.DeleteV2ListsListEntriesEntryIdResponseBody | 404                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## getV2ListsListEntriesEntryIdAttributesAttributeValues

Gets all values for a given attribute on a list entry. If the attribute is historic, this endpoint has the ability to return all historic values using the `show_historic` query param.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.entries.getV2ListsListEntriesEntryIdAttributesAttributeValues({
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
import { entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues } from "attio-js/funcs/entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await entriesGetV2ListsListEntriesEntryIdAttributesAttributeValues(attio, {
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
| `request`                                                                                                                                                                      | [operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesRequest](../../models/operations/getv2listslistentriesentryidattributesattributevaluesrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponseBody](../../models/operations/getv2listslistentriesentryidattributesattributevaluesresponsebody.md)\>**

### Errors

| Error Type                                                                      | Status Code                                                                     | Content Type                                                                    |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| errors.GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponseBody        | 400                                                                             | application/json                                                                |
| errors.GetV2ListsListEntriesEntryIdAttributesAttributeValuesEntriesResponseBody | 404                                                                             | application/json                                                                |
| errors.APIError                                                                 | 4XX, 5XX                                                                        | \*/\*                                                                           |