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
            originalPhoneNumber: "07234172834",
            countryCode: "GB",
          },
        ],
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