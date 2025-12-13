# PostV2TasksRequest

## Example Usage

```typescript
import { PostV2TasksRequest } from "attio-js/models/operations/postv2tasks.js";

let value: PostV2TasksRequest = {
  data: {
    content: "Follow up on current software solutions",
    format: "plaintext",
    deadlineAt: "2023-01-01T15:00:00.000000000Z",
    isCompleted: false,
    linkedRecords: [
      {
        targetObject: "people",
        slugOrIdOfMatchingAttribute: [
          {
            emailAddress: "alice@app.attio.com",
          },
        ],
      },
    ],
    assignees: [
      {
        referencedActorType: "workspace-member",
        referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.PostV2TasksData](../../models/operations/postv2tasksdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |