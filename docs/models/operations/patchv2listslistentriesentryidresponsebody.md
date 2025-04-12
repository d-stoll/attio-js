# PatchV2ListsListEntriesEntryIdResponseBody

Success

## Example Usage

```typescript
import { PatchV2ListsListEntriesEntryIdResponseBody } from "attio-js/models/operations";

let value: PatchV2ListsListEntriesEntryIdResponseBody = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
      entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    },
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    parentObject: "people",
    createdAt: "2022-11-21T13:22:49.061281000Z",
    entryValues: {
      "status": [
        {
          activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
          activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
          createdByActor: {
            id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            type: "workspace-member",
          },
          currencyValue: 99,
          currencyCode: "USD",
          attributeType: "currency",
        },
      ],
      "created_at": [
        {
          activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
          activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
          createdByActor: {
            id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
            type: "workspace-member",
          },
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          attributeType: "text",
        },
      ],
      "created_by": [
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
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                       | [operations.PatchV2ListsListEntriesEntryIdEntriesData](../../models/operations/patchv2listslistentriesentryidentriesdata.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |