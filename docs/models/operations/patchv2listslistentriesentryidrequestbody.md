# PatchV2ListsListEntriesEntryIdRequestBody

## Example Usage

```typescript
import { PatchV2ListsListEntriesEntryIdRequestBody } from "attio-js/models/operations/patchv2listslistentriesentryid.js";

let value: PatchV2ListsListEntriesEntryIdRequestBody = {
  data: {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                       | [operations.PatchV2ListsListEntriesEntryIdDataRequest](../../models/operations/patchv2listslistentriesentryiddatarequest.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |