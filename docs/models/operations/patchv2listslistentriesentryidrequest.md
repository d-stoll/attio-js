# PatchV2ListsListEntriesEntryIdRequest

## Example Usage

```typescript
import { PatchV2ListsListEntriesEntryIdRequest } from "attio-js/models/operations";

let value: PatchV2ListsListEntriesEntryIdRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  requestBody: {
    data: {
      entryValues: {
        "41252299-f8c7-4b5e-99c9-4ff8321d2f96": "Text value",
        "multiselect_attribute": [
          "Select option 1",
          "Select option 2",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                                         |
| `entryId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | 2e6e29ea-c4e0-4f44-842d-78a891f8c156                                                                                         |
| `requestBody`                                                                                                                | [operations.PatchV2ListsListEntriesEntryIdRequestBody](../../models/operations/patchv2listslistentriesentryidrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |