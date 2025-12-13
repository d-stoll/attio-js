# PatchV2TasksTaskIdData

## Example Usage

```typescript
import { PatchV2TasksTaskIdData } from "attio-js/models/operations/patchv2taskstaskid.js";

let value: PatchV2TasksTaskIdData = {
  deadlineAt: "2023-01-01T15:00:00.000000000Z",
  isCompleted: false,
  linkedRecords: [
    {
      targetObject: "people",
      slugOrIdOfMatchingAttribute: [
        {
          value: 17224912,
        },
      ],
    },
  ],
  assignees: [
    {
      workspaceMemberEmailAddress: "alice@attio.com",
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `deadlineAt`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The deadline of the task, in ISO 8601 format.                                                                      | 2023-01-01T15:00:00.000000000Z                                                                                     |
| `isCompleted`                                                                                                      | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether the task has been completed.                                                                               | false                                                                                                              |
| `linkedRecords`                                                                                                    | *operations.PatchV2TasksTaskIdLinkedRecordUnion*[]                                                                 | :heavy_minus_sign:                                                                                                 | Records linked to the task. Creating record links within task content text is not possible via the API at present. |                                                                                                                    |
| `assignees`                                                                                                        | *operations.PatchV2TasksTaskIdAssigneeUnion*[]                                                                     | :heavy_minus_sign:                                                                                                 | Workspace members assigned to this task.                                                                           |                                                                                                                    |