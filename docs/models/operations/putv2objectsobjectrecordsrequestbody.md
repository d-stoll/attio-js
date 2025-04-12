# PutV2ObjectsObjectRecordsRequestBody

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRequestBody } from "attio-js/models/operations";

let value: PutV2ObjectsObjectRecordsRequestBody = {
  data: {
    values: {
      "41252299-f8c7-4b5e-99c9-4ff8321d2f96": [
        "Text value",
      ],
      "multiselect_attribute": [
        "Select option 1",
        "Select option 2",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [operations.PutV2ObjectsObjectRecordsData](../../models/operations/putv2objectsobjectrecordsdata.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |