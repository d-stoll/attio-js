# PostV2ListsResponse

Success

## Example Usage

```typescript
import { PostV2ListsResponse } from "attio-js/models/operations/postv2lists.js";

let value: PostV2ListsResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
    },
    apiSlug: "hiring-engineering",
    name: "Hiring Engineering",
    parentObject: [
      "people",
    ],
    workspaceAccess: "read-and-write",
    workspaceMemberAccess: [
      {
        workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        level: "read-and-write",
      },
    ],
    createdByActor: {
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      type: "workspace-member",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [components.List](../../models/components/list.md) | :heavy_check_mark:                                 | N/A                                                |