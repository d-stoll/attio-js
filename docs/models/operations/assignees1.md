# Assignees1

## Example Usage

```typescript
import { Assignees1 } from "attio-js/models/operations";

let value: Assignees1 = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              | Example                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `referencedActorType`                                                                                                                                    | [operations.ReferencedActorType](../../models/operations/referencedactortype.md)                                                                         | :heavy_check_mark:                                                                                                                                       | The actor type of the task assignee. Only `workspace-member` actors can be assigned to tasks. [Read more information on actor types here](/docs/actors). | workspace-member                                                                                                                                         |
| `referencedActorId`                                                                                                                                      | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The ID of the actor assigned to this task.                                                                                                               | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                                                                                                                     |