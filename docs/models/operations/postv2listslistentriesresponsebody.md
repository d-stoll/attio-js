# PostV2ListsListEntriesResponseBody

Success

## Example Usage

```typescript
import { PostV2ListsListEntriesResponseBody } from "attio-js/models/operations";
import { RFCDate } from "attio-js/types";

let value: PostV2ListsListEntriesResponseBody = {
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
          attributeType: "timestamp",
          value: new RFCDate("2023-01-01T15:00:00.000000000Z"),
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
          domain: "app.attio.com",
          rootDomain: "attio.com",
          attributeType: "domain",
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
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          attributeType: "text",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.PostV2ListsListEntriesEntriesData](../../models/operations/postv2listslistentriesentriesdata.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |