# PutV2ObjectsObjectRecordsRecordIdId

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRecordIdId } from "attio-js/models/operations/putv2objectsobjectrecordsrecordid.js";

let value: PutV2ObjectsObjectRecordsRecordIdId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `workspaceId`                                            | *string*                                                 | :heavy_check_mark:                                       | A UUID identifying the workspace this record belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                     |
| `objectId`                                               | *string*                                                 | :heavy_check_mark:                                       | A UUID identifying the object this record belongs to.    | 97052eb9-e65e-443f-a297-f2d9a4a7f795                     |
| `recordId`                                               | *string*                                                 | :heavy_check_mark:                                       | A UUID identifying this record.                          | bf071e1f-6035-429d-b874-d83ea64ea13b                     |