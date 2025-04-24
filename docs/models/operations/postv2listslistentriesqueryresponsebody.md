# PostV2ListsListEntriesQueryResponseBody

Success

## Example Usage

```typescript
import { PostV2ListsListEntriesQueryResponseBody } from "attio-js/models/operations";

let value: PostV2ListsListEntriesQueryResponseBody = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
        entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
      },
      parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      parentObject: "people",
      createdAt: "2022-11-21T13:22:49.061281000Z",
      entryValues: {},
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.PostV2ListsListEntriesQueryData](../../models/operations/postv2listslistentriesquerydata.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |