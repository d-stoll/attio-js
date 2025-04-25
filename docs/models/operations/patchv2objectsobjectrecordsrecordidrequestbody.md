# PatchV2ObjectsObjectRecordsRecordIdRequestBody

## Example Usage

```typescript
import { PatchV2ObjectsObjectRecordsRecordIdRequestBody } from "attio-js/models/operations/patchv2objectsobjectrecordsrecordid.js";

let value: PatchV2ObjectsObjectRecordsRecordIdRequestBody = {
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                 | [operations.PatchV2ObjectsObjectRecordsRecordIdDataRequest](../../models/operations/patchv2objectsobjectrecordsrecordiddatarequest.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |