# PostV2TasksRequestBody

## Example Usage

```typescript
import { PostV2TasksRequestBody } from "attio-js/models/operations";

let value: PostV2TasksRequestBody = {
  data: {
    content: "Follow up on current software solutions",
    format: "plaintext",
    deadlineAt: "2023-01-01T15:00:00.000000000Z",
    isCompleted: false,
    linkedRecords: [
      {
        targetObject: "people",
        targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
      },
    ],
    assignees: [
      {
        workspaceMemberEmailAddress: "alice@attio.com",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.PostV2TasksData](../../models/operations/postv2tasksdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |