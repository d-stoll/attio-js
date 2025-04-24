# PutV2ListsListEntriesRequest

## Example Usage

```typescript
import { PutV2ListsListEntriesRequest } from "attio-js/models/operations";

let value: PutV2ListsListEntriesRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  requestBody: {
    data: {
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      parentObject: "people",
      entryValues: {},
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                       |
| `requestBody`                                                                                              | [operations.PutV2ListsListEntriesRequestBody](../../models/operations/putv2listslistentriesrequestbody.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |