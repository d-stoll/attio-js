# Task

## Example Usage

```typescript
import { Task } from "attio-js/models/components";

let value: Task = {
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
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                     | [components.TaskId](../../models/components/taskid.md)                                                                                                   | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |                                                                                                                                                          |
| `contentPlaintext`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The plaintext representation of the task content. Inline linked records will appear as "@record name" and are returned in the `linked_records` property. | Follow up on current software solutions                                                                                                                  |
| `deadlineAt`                                                                                                                                             | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The deadline date of the task. Returned as an ISO 8601 timestamp.                                                                                        | 2023-01-01                                                                                                                                               |
| `isCompleted`                                                                                                                                            | *boolean*                                                                                                                                                | :heavy_check_mark:                                                                                                                                       | Whether the task has been completed.                                                                                                                     | false                                                                                                                                                    |
| `linkedRecords`                                                                                                                                          | [components.LinkedRecords](../../models/components/linkedrecords.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                       | Records linked to the task. Creating record links within task content text is not possible via the API at present.                                       |                                                                                                                                                          |
| `assignees`                                                                                                                                              | [components.Assignees](../../models/components/assignees.md)[]                                                                                           | :heavy_check_mark:                                                                                                                                       | Workspace members assigned to this task.                                                                                                                 |                                                                                                                                                          |
| `createdByActor`                                                                                                                                         | [components.TaskCreatedByActor](../../models/components/taskcreatedbyactor.md)                                                                           | :heavy_check_mark:                                                                                                                                       | The actor that created this task.                                                                                                                        | {<br/>"type": "workspace-member",<br/>"id": "50cf242c-7fa3-4cad-87d0-75b1af71c57b"<br/>}                                                                 |
| `createdAt`                                                                                                                                              | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | When the task was created.                                                                                                                               | 2022-11-21T13:22:49.061281000Z                                                                                                                           |