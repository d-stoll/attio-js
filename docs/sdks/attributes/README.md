# Attributes
(*attributes*)

## Overview

Attributes model properties of objects and lists. Some attributes, such as the `name` attribute on a person, are system-defined, while others are user-defined. Attributes are one of [many types](/docs/attribute-types) such as text, location or select. See our [data model guide](/docs/data-model) for more information.

### Available Operations

* [list](#list) - List attributes
* [create](#create) - Create an attribute
* [get](#get) - Get an attribute
* [update](#update) - Update an attribute
* [listSelectOptions](#listselectoptions) - List select options
* [createSelectOption](#createselectoption) - Create a select option
* [updateOption](#updateoption) - Update a select option
* [listStatuses](#liststatuses) - List statuses

## list

Lists all attributes defined on a specific object or list. Attributes are returned in the order that they are sorted by in the UI.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.list({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    limit: 10,
    offset: 5,
    showArchived: true,
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
import { attributesList } from "attio-js/funcs/attributesList.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesList(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    limit: 10,
    offset: 5,
    showArchived: true,
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
  useAttributesList,
  useAttributesListSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAttributesList,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAttributesList,
  invalidateAllAttributesList,
} from "attio-js/react-query/attributesList.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesRequest](../../models/operations/getv2targetidentifierattributesrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesResponseBody](../../models/operations/getv2targetidentifierattributesresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Creates a new attribute on either an object or a list.

To create an attribute on an object, you must also have the `object_configuration:read-write` scope.

To create an attribute on a list, you must also have the `list_configuration:read-write` scope.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.create({
    target: "lists",
    identifier: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    requestBody: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        type: "text",
        isRequired: true,
        isUnique: true,
        isMultiselect: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 42,
            },
          ],
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
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
import { attributesCreate } from "attio-js/funcs/attributesCreate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesCreate(attio, {
    target: "lists",
    identifier: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    requestBody: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        type: "text",
        isRequired: true,
        isUnique: true,
        isMultiselect: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 42,
            },
          ],
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
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
  useAttributesCreateMutation
} from "attio-js/react-query/attributesCreate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesRequest](../../models/operations/postv2targetidentifierattributesrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TargetIdentifierAttributesResponseBody](../../models/operations/postv2targetidentifierattributesresponsebody.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesResponseBody                   | 400                                                                   | application/json                                                      |
| errors.PostV2TargetIdentifierAttributesAttributesResponseBody         | 404                                                                   | application/json                                                      |
| errors.PostV2TargetIdentifierAttributesAttributesResponseResponseBody | 409                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |

## get

Gets information about a single attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.get({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
import { attributesGet } from "attio-js/funcs/attributesGet.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGet(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
  useAttributesGet,
  useAttributesGetSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAttributesGet,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAttributesGet,
  invalidateAllAttributesGet,
} from "attio-js/react-query/attributesGet.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesAttributeRequest](../../models/operations/getv2targetidentifierattributesattributerequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesAttributeResponseBody](../../models/operations/getv2targetidentifierattributesattributeresponsebody.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseResponseBody | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## update

Updates a single attribute on a given object or list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.update({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        isRequired: true,
        isUnique: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 42,
            },
          ],
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
        },
        isArchived: false,
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
import { attributesUpdate } from "attio-js/funcs/attributesUpdate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesUpdate(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "Your Attribute",
        description: "Lorem ipsum",
        apiSlug: "my-attribute",
        isRequired: true,
        isUnique: true,
        defaultValue: {
          type: "static",
          template: [
            {
              value: 42,
            },
          ],
        },
        config: {
          currency: {
            defaultCurrencyCode: "USD",
            displayType: "symbol",
          },
          recordReference: {
            allowedObjects: [
              "people",
            ],
          },
        },
        isArchived: false,
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
  useAttributesUpdateMutation
} from "attio-js/react-query/attributesUpdate.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TargetIdentifierAttributesAttributeRequest](../../models/operations/patchv2targetidentifierattributesattributerequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeResponseBody](../../models/operations/patchv2targetidentifierattributesattributeresponsebody.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeResponseBody | 400                                                           | application/json                                              |
| errors.ResponseResponseBody                                   | 404                                                           | application/json                                              |
| errors.APIError                                               | 4XX, 5XX                                                      | \*/\*                                                         |

## listSelectOptions

Lists all select options for a particular attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.listSelectOptions({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
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
import { attributesListSelectOptions } from "attio-js/funcs/attributesListSelectOptions.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesListSelectOptions(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showArchived: true,
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
  useAttributesListSelectOptions,
  useAttributesListSelectOptionsSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAttributesListSelectOptions,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAttributesListSelectOptions,
  invalidateAllAttributesListSelectOptions,
} from "attio-js/react-query/attributesListSelectOptions.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesAttributeOptionsRequest](../../models/operations/getv2targetidentifierattributesattributeoptionsrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesAttributeOptionsResponseBody](../../models/operations/getv2targetidentifierattributesattributeoptionsresponsebody.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseResponseBody | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## createSelectOption

Adds a select option to a select attribute on an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.createSelectOption({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "Medium",
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
import { attributesCreateSelectOption } from "attio-js/funcs/attributesCreateSelectOption.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesCreateSelectOption(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "Medium",
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
  useAttributesCreateSelectOptionMutation
} from "attio-js/react-query/attributesCreateSelectOption.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesAttributeOptionsRequest](../../models/operations/postv2targetidentifierattributesattributeoptionsrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TargetIdentifierAttributesAttributeOptionsResponseBody](../../models/operations/postv2targetidentifierattributesattributeoptionsresponsebody.md)\>**

### Errors

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsResponseBody | 400                                                                 | application/json                                                    |
| errors.ResponseResponseBody                                         | 404                                                                 | application/json                                                    |
| errors.AttributesResponseBody                                       | 409                                                                 | application/json                                                    |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## updateOption

Updates a select option on an attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.updateOption({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    option: "Medium",
    requestBody: {
      data: {
        title: "Medium",
        isArchived: false,
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
import { attributesUpdateOption } from "attio-js/funcs/attributesUpdateOption.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesUpdateOption(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    option: "Medium",
    requestBody: {
      data: {
        title: "Medium",
        isArchived: false,
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
  useAttributesUpdateOptionMutation
} from "attio-js/react-query/attributesUpdateOption.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TargetIdentifierAttributesAttributeOptionsOptionRequest](../../models/operations/patchv2targetidentifierattributesattributeoptionsoptionrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody](../../models/operations/patchv2targetidentifierattributesattributeoptionsoptionresponsebody.md)\>**

### Errors

| Error Type                                                                 | Status Code                                                                | Content Type                                                               |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody | 400                                                                        | application/json                                                           |
| errors.ResponseResponseBody                                                | 404                                                                        | application/json                                                           |
| errors.AttributesResponseBody                                              | 409                                                                        | application/json                                                           |
| errors.APIError                                                            | 4XX, 5XX                                                                   | \*/\*                                                                      |

## listStatuses

Lists all statuses for a particular status attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.listStatuses({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
import { attributesListStatuses } from "attio-js/funcs/attributesListStatuses.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesListStatuses(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
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
  useAttributesListStatuses,
  useAttributesListStatusesSuspense,

  // Utility for prefetching data during server-side rendering and in React
  // Server Components that will be immediately available to client components
  // using the hooks.
  prefetchAttributesListStatuses,
  
  // Utilities to invalidate the query cache for this query in response to
  // mutations and other user actions.
  invalidateAttributesListStatuses,
  invalidateAllAttributesListStatuses,
} from "attio-js/react-query/attributesListStatuses.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV2TargetIdentifierAttributesAttributeStatusesRequest](../../models/operations/getv2targetidentifierattributesattributestatusesrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2TargetIdentifierAttributesAttributeStatusesResponseBody](../../models/operations/getv2targetidentifierattributesattributestatusesresponsebody.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ResponseResponseBody | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |