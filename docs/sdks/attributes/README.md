# Attributes
(*attributes*)

## Overview

Attributes model properties of objects and lists. Some attributes, such as the `name` attribute on a person, are system-defined, while others are user-defined. Attributes are one of [many types](/docs/attribute-types) such as text, location or select. See our [data model guide](/docs/data-model) for more information.

### Available Operations

* [getV2TargetIdentifierAttributes](#getv2targetidentifierattributes) - List attributes
* [postV2TargetIdentifierAttributes](#postv2targetidentifierattributes) - Create an attribute
* [getV2TargetIdentifierAttributesAttribute](#getv2targetidentifierattributesattribute) - Get an attribute
* [patchV2TargetIdentifierAttributesAttribute](#patchv2targetidentifierattributesattribute) - Update an attribute
* [getV2TargetIdentifierAttributesAttributeOptions](#getv2targetidentifierattributesattributeoptions) - List select options
* [postV2TargetIdentifierAttributesAttributeOptions](#postv2targetidentifierattributesattributeoptions) - Create a select option
* [patchV2TargetIdentifierAttributesAttributeOptionsOption](#patchv2targetidentifierattributesattributeoptionsoption) - Update a select option
* [getV2TargetIdentifierAttributesAttributeStatuses](#getv2targetidentifierattributesattributestatuses) - List statuses
* [postV2TargetIdentifierAttributesAttributeStatuses](#postv2targetidentifierattributesattributestatuses) - Create a status
* [patchV2TargetIdentifierAttributesAttributeStatusesStatus](#patchv2targetidentifierattributesattributestatusesstatus) - Update a status

## getV2TargetIdentifierAttributes

Lists all attributes defined on a specific object or list. Attributes are returned in the order that they are sorted by in the UI.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributes({
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
import { attributesGetV2TargetIdentifierAttributes } from "attio-js/funcs/attributesGetV2TargetIdentifierAttributes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributes(attio, {
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

## postV2TargetIdentifierAttributes

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
  const result = await attio.attributes.postV2TargetIdentifierAttributes({
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
import { attributesPostV2TargetIdentifierAttributes } from "attio-js/funcs/attributesPostV2TargetIdentifierAttributes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPostV2TargetIdentifierAttributes(attio, {
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

## getV2TargetIdentifierAttributesAttribute

Gets information about a single attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributesAttribute({
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
import { attributesGetV2TargetIdentifierAttributesAttribute } from "attio-js/funcs/attributesGetV2TargetIdentifierAttributesAttribute.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributesAttribute(attio, {
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

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.GetV2TargetIdentifierAttributesAttributeResponseBody | 404                                                         | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |

## patchV2TargetIdentifierAttributesAttribute

Updates a single attribute on a given object or list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.patchV2TargetIdentifierAttributesAttribute({
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
import { attributesPatchV2TargetIdentifierAttributesAttribute } from "attio-js/funcs/attributesPatchV2TargetIdentifierAttributesAttribute.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPatchV2TargetIdentifierAttributesAttribute(attio, {
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

| Error Type                                                              | Status Code                                                             | Content Type                                                            |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeResponseBody           | 400                                                                     | application/json                                                        |
| errors.PatchV2TargetIdentifierAttributesAttributeAttributesResponseBody | 404                                                                     | application/json                                                        |
| errors.APIError                                                         | 4XX, 5XX                                                                | \*/\*                                                                   |

## getV2TargetIdentifierAttributesAttributeOptions

Lists all select options for a particular attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributesAttributeOptions({
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
import { attributesGetV2TargetIdentifierAttributesAttributeOptions } from "attio-js/funcs/attributesGetV2TargetIdentifierAttributesAttributeOptions.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributesAttributeOptions(attio, {
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

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.GetV2TargetIdentifierAttributesAttributeOptionsResponseBody | 404                                                                | application/json                                                   |
| errors.APIError                                                    | 4XX, 5XX                                                           | \*/\*                                                              |

## postV2TargetIdentifierAttributesAttributeOptions

Adds a select option to a select attribute on an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.postV2TargetIdentifierAttributesAttributeOptions({
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
import { attributesPostV2TargetIdentifierAttributesAttributeOptions } from "attio-js/funcs/attributesPostV2TargetIdentifierAttributesAttributeOptions.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPostV2TargetIdentifierAttributesAttributeOptions(attio, {
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

| Error Type                                                                            | Status Code                                                                           | Content Type                                                                          |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsResponseBody                   | 400                                                                                   | application/json                                                                      |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsAttributesResponseBody         | 404                                                                                   | application/json                                                                      |
| errors.PostV2TargetIdentifierAttributesAttributeOptionsAttributesResponseResponseBody | 409                                                                                   | application/json                                                                      |
| errors.APIError                                                                       | 4XX, 5XX                                                                              | \*/\*                                                                                 |

## patchV2TargetIdentifierAttributesAttributeOptionsOption

Updates a select option on an attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.patchV2TargetIdentifierAttributesAttributeOptionsOption({
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
import { attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption } from "attio-js/funcs/attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPatchV2TargetIdentifierAttributesAttributeOptionsOption(attio, {
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

| Error Type                                                                                   | Status Code                                                                                  | Content Type                                                                                 |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionResponseBody                   | 400                                                                                          | application/json                                                                             |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionAttributesResponseBody         | 404                                                                                          | application/json                                                                             |
| errors.PatchV2TargetIdentifierAttributesAttributeOptionsOptionAttributesResponseResponseBody | 409                                                                                          | application/json                                                                             |
| errors.APIError                                                                              | 4XX, 5XX                                                                                     | \*/\*                                                                                        |

## getV2TargetIdentifierAttributesAttributeStatuses

Lists all statuses for a particular status attribute on either an object or a list.

Required scopes: `object_configuration:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.getV2TargetIdentifierAttributesAttributeStatuses({
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
import { attributesGetV2TargetIdentifierAttributesAttributeStatuses } from "attio-js/funcs/attributesGetV2TargetIdentifierAttributesAttributeStatuses.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesGetV2TargetIdentifierAttributesAttributeStatuses(attio, {
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

| Error Type                                                          | Status Code                                                         | Content Type                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| errors.GetV2TargetIdentifierAttributesAttributeStatusesResponseBody | 404                                                                 | application/json                                                    |
| errors.APIError                                                     | 4XX, 5XX                                                            | \*/\*                                                               |

## postV2TargetIdentifierAttributesAttributeStatuses

Add a new status to a status attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.postV2TargetIdentifierAttributesAttributeStatuses({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "In Progress",
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
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
import { attributesPostV2TargetIdentifierAttributesAttributeStatuses } from "attio-js/funcs/attributesPostV2TargetIdentifierAttributesAttributeStatuses.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPostV2TargetIdentifierAttributesAttributeStatuses(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "In Progress",
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
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
| `request`                                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesAttributeStatusesRequest](../../models/operations/postv2targetidentifierattributesattributestatusesrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2TargetIdentifierAttributesAttributeStatusesResponseBody](../../models/operations/postv2targetidentifierattributesattributestatusesresponsebody.md)\>**

### Errors

| Error Type                                                                             | Status Code                                                                            | Content Type                                                                           |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesResponseBody                   | 400                                                                                    | application/json                                                                       |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesAttributesResponseBody         | 404                                                                                    | application/json                                                                       |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesAttributesResponseResponseBody | 409                                                                                    | application/json                                                                       |
| errors.APIError                                                                        | 4XX, 5XX                                                                               | \*/\*                                                                                  |

## patchV2TargetIdentifierAttributesAttributeStatusesStatus

Update a status on an status attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.attributes.patchV2TargetIdentifierAttributesAttributeStatusesStatus({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    status: "In Progress",
    requestBody: {
      data: {
        title: "In Progress",
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
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
import { attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus } from "attio-js/funcs/attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await attributesPatchV2TargetIdentifierAttributesAttributeStatusesStatus(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    status: "In Progress",
    requestBody: {
      data: {
        title: "In Progress",
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV2TargetIdentifierAttributesAttributeStatusesStatusRequest](../../models/operations/patchv2targetidentifierattributesattributestatusesstatusrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeStatusesStatusResponseBody](../../models/operations/patchv2targetidentifierattributesattributestatusesstatusresponsebody.md)\>**

### Errors

| Error Type                                                                                    | Status Code                                                                                   | Content Type                                                                                  |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusResponseBody                   | 400                                                                                           | application/json                                                                              |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusAttributesResponseBody         | 404                                                                                           | application/json                                                                              |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusAttributesResponseResponseBody | 409                                                                                           | application/json                                                                              |
| errors.APIError                                                                               | 4XX, 5XX                                                                                      | \*/\*                                                                                         |