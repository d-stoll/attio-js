# PostV2TasksData

## Example Usage

```typescript
import { PostV2TasksData } from "attio-js/models/operations/postv2tasks.js";

let value: PostV2TasksData = {
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `content`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The text content of the task, in the format specified by the `format` property.                                    | Follow up on current software solutions                                                                            |
| `format`                                                                                                           | [operations.PostV2TasksFormat](../../models/operations/postv2tasksformat.md)                                       | :heavy_check_mark:                                                                                                 | The format of the task content to be created. Rich text formatting, links and @references are not supported.       |                                                                                                                    |
| `deadlineAt`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The deadline of the task, in ISO 8601 format.                                                                      | 2023-01-01T15:00:00.000000000Z                                                                                     |
| `isCompleted`                                                                                                      | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | Whether the task has been completed.                                                                               | false                                                                                                              |
| `linkedRecords`                                                                                                    | *operations.PostV2TasksLinkedRecordUnion*[]                                                                        | :heavy_check_mark:                                                                                                 | Records linked to the task. Creating record links within task content text is not possible via the API at present. |                                                                                                                    |
| `assignees`                                                                                                        | *operations.PostV2TasksAssigneeUnion*[]                                                                            | :heavy_check_mark:                                                                                                 | Workspace members assigned to this task.                                                                           |                                                                                                                    |