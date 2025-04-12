# PutV2ListsListEntriesResponseBody

Success

## Example Usage

```typescript
import { PutV2ListsListEntriesResponseBody } from "attio-js/models/operations";

let value: PutV2ListsListEntriesResponseBody = {
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
          originalEmailAddress: "alice@app.attio.com",
          emailAddress: "alice@app.attio.com",
          emailDomain: "app.attio.com",
          emailRootDomain: "attio.com",
          emailLocalSpecifier: "alice",
          attributeType: "email-address",
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
          originalEmailAddress: "alice@app.attio.com",
          emailAddress: "alice@app.attio.com",
          emailDomain: "app.attio.com",
          emailRootDomain: "attio.com",
          emailLocalSpecifier: "alice",
          attributeType: "email-address",
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
          value: true,
          attributeType: "checkbox",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.PutV2ListsListEntriesEntriesData](../../models/operations/putv2listslistentriesentriesdata.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |