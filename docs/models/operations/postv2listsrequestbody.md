# PostV2ListsRequestBody

## Example Usage

```typescript
import { PostV2ListsRequestBody } from "attio-js/models/operations";

let value: PostV2ListsRequestBody = {
  data: {
    name: "Enterprise Sales",
    apiSlug: "enterprise_sales",
    parentObject: "people",
    workspaceAccess: "read-and-write",
    workspaceMemberAccess: [
      {
        workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        level: "read-and-write",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.PostV2ListsData](../../models/operations/postv2listsdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |