# PatchV2ObjectsObjectRecordsRecordIdRequest

## Example Usage

```typescript
import { PatchV2ObjectsObjectRecordsRecordIdRequest } from "attio-js/models/operations";

let value: PatchV2ObjectsObjectRecordsRecordIdRequest = {
  object: "people",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                                               | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    | people                                                                                                                                 |
| `recordId`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                                                                   |
| `requestBody`                                                                                                                          | [operations.PatchV2ObjectsObjectRecordsRecordIdRequestBody](../../models/operations/patchv2objectsobjectrecordsrecordidrequestbody.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |