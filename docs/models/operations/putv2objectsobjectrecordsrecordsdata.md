# PutV2ObjectsObjectRecordsRecordsData

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRecordsData } from "attio-js/models/operations";

let value: PutV2ObjectsObjectRecordsRecordsData = {
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
        status: {
          id: {
            workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
            objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
            attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
            statusId: "11f07f01-c10f-4e05-a522-33e050bc52ee",
          },
          title: "In Progress",
          isArchived: false,
          celebrationEnabled: false,
          targetTimeInStatus: "P0Y0M1DT0H0M0S",
        },
        attributeType: "status",
      },
    ],
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                                                                                | [operations.PutV2ObjectsObjectRecordsId](../../models/operations/putv2objectsobjectrecordsid.md)    | :heavy_check_mark:                                                                                  | N/A                                                                                                 |                                                                                                     |
| `createdAt`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | When this record was created.                                                                       | 2022-11-21T13:22:49.061281000Z                                                                      |
| `values`                                                                                            | Record<string, *operations.PutV2ObjectsObjectRecordsValues*[]>                                      | :heavy_check_mark:                                                                                  | A record type with an attribute `api_slug` as the key, and an array of value objects as the values. |                                                                                                     |