# PatchV2ListsListRequest

## Example Usage

```typescript
import { PatchV2ListsListRequest } from "attio-js/models/operations/patchv2listslist.js";

let value: PatchV2ListsListRequest = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  requestBody: {
    data: {
      name: "Enterprise Sales",
      apiSlug: "enterprise_sales",
      workspaceAccess: "read-and-write",
      workspaceMemberAccess: [
        {
          workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          level: "read-and-write",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `list`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                             |
| `requestBody`                                                                                    | [operations.PatchV2ListsListRequestBody](../../models/operations/patchv2listslistrequestbody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |