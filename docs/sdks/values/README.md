# Values
(*entries.attributes.values*)

## Overview

### Available Operations

* [list](#list) - List attribute values for a list entry

## list

Gets all values for a given attribute on a list entry. If the attribute is historic, this endpoint has the ability to return all historic values using the `show_historic` query param.

Required scopes: `list_entry:read`, `list_configuration:read`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values" method="get" path="/v2/lists/{list}/entries/{entry_id}/attributes/{attribute}/values" -->
```typescript
import { Attio } from "attio-js";

const attio = new Attio({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const result = await attio.entries.attributes.values.list({
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showHistoric: true,
    limit: 10,
    offset: 5,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AttioCore } from "attio-js/core.js";
import { entriesAttributesValuesList } from "attio-js/funcs/entriesAttributesValuesList.js";

// Use `AttioCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const attio = new AttioCore({
  apiKey: process.env["ATTIO_API_KEY"] ?? "",
});

async function run() {
  const res = await entriesAttributesValuesList(attio, {
    list: "enterprise_sales",
    entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
    showHistoric: true,
    limit: 10,
    offset: 5,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("entriesAttributesValuesList failed:", res.error);
  }
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

**Promise\<[operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponse](../../models/operations/getv2listslistentriesentryidattributesattributevaluesresponse.md)\>**

### Errors

| Error Type                                                                           | Status Code                                                                          | Content Type                                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| errors.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesValidationTypeError | 400                                                                                  | application/json                                                                     |
| errors.GetV2ListsListNotFoundError                                                   | 404                                                                                  | application/json                                                                     |
| errors.APIError                                                                      | 4XX, 5XX                                                                             | \*/\*                                                                                |