# Webhooks
(*webhooks*)

## Overview

Webhooks allow you to listen for changes to data in Attio, for example when a record is updated.

### Available Operations

* [list](#list) - List webhooks
* [create](#create) - Create a webhook
* [get](#get) - Get a webhook
* [partialUpdate](#partialupdate) - Update a webhook
* [delete](#delete) - Delete a webhook

## list

Get all of the webhooks in your workspace.

Required scopes: `webhook:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.webhooks.list({
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
import { webhooksList } from "attio-js/funcs/webhooksList.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await webhooksList(attio, {
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
| `request`                                                                                                                                                                      | [operations.GetV2WebhooksRequest](../../models/operations/getv2webhooksrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2WebhooksResponseBody](../../models/operations/getv2webhooksresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## create

Create a webhook and associated subscriptions.

Required scopes: `webhook:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.webhooks.create({
    data: {
      targetUrl: "https://example.com/webhook",
      subscriptions: [],
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
import { webhooksCreate } from "attio-js/funcs/webhooksCreate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await webhooksCreate(attio, {
    data: {
      targetUrl: "https://example.com/webhook",
      subscriptions: [],
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
| `request`                                                                                                                                                                      | [operations.PostV2WebhooksRequestBody](../../models/operations/postv2webhooksrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2WebhooksResponseBody](../../models/operations/postv2webhooksresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.PostV2WebhooksResponseBody | 400                               | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## get

Get a single webhook.

Required scopes: `webhook:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.webhooks.get({
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
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
import { webhooksGet } from "attio-js/funcs/webhooksGet.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await webhooksGet(attio, {
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
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
| `request`                                                                                                                                                                      | [operations.GetV2WebhooksWebhookIdRequest](../../models/operations/getv2webhookswebhookidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2WebhooksWebhookIdResponseBody](../../models/operations/getv2webhookswebhookidresponsebody.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.WebhooksResponseBody | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## partialUpdate

Update a webhook and associated subscriptions.

Required scopes: `webhook:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.webhooks.partialUpdate({
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
    requestBody: {
      data: {
        targetUrl: "https://example.com/webhook",
        subscriptions: [
          {
            eventType: "note.created",
            filter: {
              dollarAnd: [
                {
                  field: "parent_object_id",
                  operator: "equals",
                  value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
                },
              ],
            },
          },
          {
            eventType: "note.created",
            filter: {
              dollarAnd: [
                {
                  field: "parent_object_id",
                  operator: "equals",
                  value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
                },
              ],
            },
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
import { webhooksPartialUpdate } from "attio-js/funcs/webhooksPartialUpdate.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await webhooksPartialUpdate(attio, {
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
    requestBody: {
      data: {
        targetUrl: "https://example.com/webhook",
        subscriptions: [
          {
            eventType: "note.created",
            filter: {
              dollarAnd: [
                {
                  field: "parent_object_id",
                  operator: "equals",
                  value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
                },
              ],
            },
          },
          {
            eventType: "note.created",
            filter: {
              dollarAnd: [
                {
                  field: "parent_object_id",
                  operator: "equals",
                  value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
                },
              ],
            },
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
| `request`                                                                                                                                                                      | [operations.PatchV2WebhooksWebhookIdRequest](../../models/operations/patchv2webhookswebhookidrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PatchV2WebhooksWebhookIdResponseBody](../../models/operations/patchv2webhookswebhookidresponsebody.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.WebhooksResponseBody | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## delete

Delete a webhook by ID.

Required scopes: `webhook:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.webhooks.delete({
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
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
import { webhooksDelete } from "attio-js/funcs/webhooksDelete.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await webhooksDelete(attio, {
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
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
| `request`                                                                                                                                                                      | [operations.DeleteV2WebhooksWebhookIdRequest](../../models/operations/deletev2webhookswebhookidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2WebhooksWebhookIdResponseBody](../../models/operations/deletev2webhookswebhookidresponsebody.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.DeleteV2WebhooksWebhookIdResponseBody | 404                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |