# PutV2ObjectsObjectRecordsResponseBody

Success

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsResponseBody } from "attio-js/models/operations";

let value: PutV2ObjectsObjectRecordsResponseBody = {
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
          value: 42,
          attributeType: "number",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.PutV2ObjectsObjectRecordsRecordsData](../../models/operations/putv2objectsobjectrecordsrecordsdata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |