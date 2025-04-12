# Notes
(*notes*)

## Overview

Notes are rich text documents that reference a single parent record.

### Available Operations

* [getV2Notes](#getv2notes) - List notes
* [postV2Notes](#postv2notes) - Create a note
* [getV2NotesNoteId](#getv2notesnoteid) - Get a note
* [deleteV2NotesNoteId](#deletev2notesnoteid) - Delete a note

## getV2Notes

List notes for all records or for a specific record.

Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.getV2Notes({
    limit: 10,
    offset: 5,
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
import { notesGetV2Notes } from "attio-js/funcs/notesGetV2Notes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesGetV2Notes(attio, {
    limit: 10,
    offset: 5,
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
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
| `request`                                                                                                                                                                      | [operations.GetV2NotesRequest](../../models/operations/getv2notesrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2NotesResponseBody](../../models/operations/getv2notesresponsebody.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.GetV2NotesResponseBody | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## postV2Notes

Creates a new note for a given record.

Required scopes: `note:read-write`, `object_configuration:read`, `record_permission:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.postV2Notes({
    data: {
      parentObject: "people",
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      title: "Initial Prospecting Call Summary",
      format: "plaintext",
      content: "Introduction\n" +
      "Date and time of the call\n" +
      "Participants\n" +
      "Purpose of the call\n" +
      "Customer Background\n" +
      "Company overview (industry, size, location)\n" +
      "Key business challenges\n" +
      "Current software solutions (if any) and pain points",
      createdAt: "2023-01-01T15:00:00.000000000Z",
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
import { notesPostV2Notes } from "attio-js/funcs/notesPostV2Notes.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesPostV2Notes(attio, {
    data: {
      parentObject: "people",
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      title: "Initial Prospecting Call Summary",
      format: "plaintext",
      content: "Introduction\n" +
      "Date and time of the call\n" +
      "Participants\n" +
      "Purpose of the call\n" +
      "Customer Background\n" +
      "Company overview (industry, size, location)\n" +
      "Key business challenges\n" +
      "Current software solutions (if any) and pain points",
      createdAt: "2023-01-01T15:00:00.000000000Z",
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
| `request`                                                                                                                                                                      | [operations.PostV2NotesRequestBody](../../models/operations/postv2notesrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2NotesResponseBody](../../models/operations/postv2notesresponsebody.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.PostV2NotesResponseBody | 404                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## getV2NotesNoteId

Get a single note by ID.

Required scopes: `note:read`, `object_configuration:read`, `record_permission:read`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.getV2NotesNoteId({
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
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
import { notesGetV2NotesNoteId } from "attio-js/funcs/notesGetV2NotesNoteId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesGetV2NotesNoteId(attio, {
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
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
| `request`                                                                                                                                                                      | [operations.GetV2NotesNoteIdRequest](../../models/operations/getv2notesnoteidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV2NotesNoteIdResponseBody](../../models/operations/getv2notesnoteidresponsebody.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.GetV2NotesNoteIdResponseBody | 404                                 | application/json                    |
| errors.APIError                     | 4XX, 5XX                            | \*/\*                               |

## deleteV2NotesNoteId

Delete a single note by ID.

Required scopes: `note:read-write`.

### Example Usage

```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const result = await attio.notes.deleteV2NotesNoteId({
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
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
import { notesDeleteV2NotesNoteId } from "attio-js/funcs/notesDeleteV2NotesNoteId.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  oauth2: process.env["ATTIO_OAUTH2"] ?? "",
});

async function run() {
  const res = await notesDeleteV2NotesNoteId(attio, {
    noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
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
| `request`                                                                                                                                                                      | [operations.DeleteV2NotesNoteIdRequest](../../models/operations/deletev2notesnoteidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV2NotesNoteIdResponseBody](../../models/operations/deletev2notesnoteidresponsebody.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DeleteV2NotesNoteIdResponseBody | 404                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |