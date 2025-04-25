# PostV2TasksResponse

Success

## Example Usage

```typescript
import { PostV2TasksResponse } from "attio-js/models/operations/postv2tasks.js";

let value: PostV2TasksResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
    },
    contentPlaintext: "Follow up on current software solutions",
    deadlineAt: "2023-01-01",
    isCompleted: false,
    linkedRecords: [
      {
        targetObjectId: "people",
        targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      },
    ],
    assignees: [
      {
        referencedActorType: "workspace-member",
        referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
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
| `data`                                             | [components.Task](../../models/components/task.md) | :heavy_check_mark:                                 | N/A                                                |