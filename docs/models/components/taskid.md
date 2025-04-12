# TaskId

## Example Usage

```typescript
import { TaskId } from "attio-js/models/components";

let value: TaskId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `workspaceId`                                | *string*                                     | :heavy_check_mark:                           | The ID of the workspace the task belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c         |
| `taskId`                                     | *string*                                     | :heavy_check_mark:                           | The ID of the task.                          | 649e34f4-c39a-4f4d-99ef-48a36bef8f04         |