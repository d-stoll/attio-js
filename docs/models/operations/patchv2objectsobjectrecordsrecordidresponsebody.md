# PatchV2ObjectsObjectRecordsRecordIdResponseBody

Success

## Example Usage

```typescript
import { PatchV2ObjectsObjectRecordsRecordIdResponseBody } from "attio-js/models/operations";

let value: PatchV2ObjectsObjectRecordsRecordIdResponseBody = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
    values: {
      "key": [
        {
          activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
          activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
          createdByActor: {
            id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            type: "workspace-member",
          },
          value: 3,
          attributeType: "rating",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                 | [operations.PatchV2ObjectsObjectRecordsRecordIdRecordsData](../../models/operations/patchv2objectsobjectrecordsrecordidrecordsdata.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |