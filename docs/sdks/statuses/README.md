# Statuses
(*attributes.statuses*)

## Overview

### Available Operations

* [create](#create) - Create a status
* [update](#update) - Update a status

## create

Add a new status to a status attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v2/{target}/{identifier}/attributes/{attribute}/statuses" method="post" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.attributes.statuses.create({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
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
import { attributesStatusesCreate } from "attio-js/funcs/attributesStatusesCreate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await attributesStatusesCreate(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    requestBody: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesStatusesCreate failed:", res.error);
  }
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

**Promise\<[operations.PostV2TargetIdentifierAttributesAttributeStatusesResponse](../../models/operations/postv2targetidentifierattributesattributestatusesresponse.md)\>**

### Errors

| Error Type                                                                  | Status Code                                                                 | Content Type                                                                |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesValidationTypeError | 400                                                                         | application/json                                                            |
| errors.GetV2TargetIdentifierAttributesAttributeNotFoundError                | 404                                                                         | application/json                                                            |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesSlugConflictError   | 409                                                                         | application/json                                                            |
| errors.APIError                                                             | 4XX, 5XX                                                                    | \*/\*                                                                       |

## update

Update a status on an status attribute on either an object or a list.

Required scopes: `object_configuration:read-write`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}" method="patch" path="/v2/{target}/{identifier}/attributes/{attribute}/statuses/{status}" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.attributes.statuses.update({
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    status: "In Progress",
    requestBody: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
        isArchived: false,
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
import { attributesStatusesUpdate } from "attio-js/funcs/attributesStatusesUpdate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await attributesStatusesUpdate(attio, {
    target: "lists",
    identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    status: "In Progress",
    requestBody: {
      data: {
        title: "In Progress",
        celebrationEnabled: true,
        targetTimeInStatus: "P0Y0M1DT0H0M0S",
        isArchived: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attributesStatusesUpdate failed:", res.error);
  }
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

**Promise\<[operations.PatchV2TargetIdentifierAttributesAttributeStatusesStatusResponse](../../models/operations/patchv2targetidentifierattributesattributestatusesstatusresponse.md)\>**

### Errors

| Error Type                                                                         | Status Code                                                                        | Content Type                                                                       |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| errors.PatchV2TargetIdentifierAttributesAttributeStatusesStatusInvalidRequestError | 400                                                                                | application/json                                                                   |
| errors.GetV2TargetIdentifierAttributesAttributeNotFoundError                       | 404                                                                                | application/json                                                                   |
| errors.PostV2TargetIdentifierAttributesAttributeStatusesSlugConflictError          | 409                                                                                | application/json                                                                   |
| errors.APIError                                                                    | 4XX, 5XX                                                                           | \*/\*                                                                              |