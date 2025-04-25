# PutV2ListsListEntriesRequestBody

## Example Usage

```typescript
import { PutV2ListsListEntriesRequestBody } from "attio-js/models/operations/putv2listslistentries.js";

let value: PutV2ListsListEntriesRequestBody = {
  data: {
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    parentObject: "people",
    entryValues: {
      "41252299-f8c7-4b5e-99c9-4ff8321d2f96": "Text value",
      "multiselect_attribute": [
        "Select option 1",
        "Select option 2",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.PutV2ListsListEntriesDataRequest](../../models/operations/putv2listslistentriesdatarequest.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |