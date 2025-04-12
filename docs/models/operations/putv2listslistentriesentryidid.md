# PutV2ListsListEntriesEntryIdId

## Example Usage

```typescript
import { PutV2ListsListEntriesEntryIdId } from "attio-js/models/operations";

let value: PutV2ListsListEntriesEntryIdId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `workspaceId`                                           | *string*                                                | :heavy_check_mark:                                      | A UUID identifying the workspace this entry belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                    |
| `listId`                                                | *string*                                                | :heavy_check_mark:                                      | A UUID identifying the list this entry is in.           | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                    |
| `entryId`                                               | *string*                                                | :heavy_check_mark:                                      | A UUID identifying this entry.                          | 2e6e29ea-c4e0-4f44-842d-78a891f8c156                    |