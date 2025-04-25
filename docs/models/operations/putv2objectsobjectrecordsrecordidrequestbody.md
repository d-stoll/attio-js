# PutV2ObjectsObjectRecordsRecordIdRequestBody

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRecordIdRequestBody } from "attio-js/models/operations/putv2objectsobjectrecordsrecordid.js";

let value: PutV2ObjectsObjectRecordsRecordIdRequestBody = {
  data: {
    values: {
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                             | [operations.PutV2ObjectsObjectRecordsRecordIdDataRequest](../../models/operations/putv2objectsobjectrecordsrecordiddatarequest.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |