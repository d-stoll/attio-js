# PostV2ListsListEntriesQueryRequest

## Example Usage

```typescript
import { PostV2ListsListEntriesQueryRequest } from "attio-js/models/operations";

let value: PostV2ListsListEntriesQueryRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  requestBody: {
    filter: {
      "name": "Ada Lovelace",
    },
    sorts: [
      {
        direction: "asc",
        attribute: "name",
        field: "last_name",
      },
    ],
    limit: 500,
    offset: 0,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                                   |
| `requestBody`                                                                                                          | [operations.PostV2ListsListEntriesQueryRequestBody](../../models/operations/postv2listslistentriesqueryrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |