# Assignee

## Example Usage

```typescript
import { Assignee } from "attio-js/models/components/task.js";

let value: Assignee = {
  referencedActorType: "workspace-member",
  referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `referencedActorType`                                                                    | [components.TaskReferencedActorType](../../models/components/taskreferencedactortype.md) | :heavy_check_mark:                                                                       | The type of actor. [Read more information on actor types here](/docs/actors).            | workspace-member                                                                         |
| `referencedActorId`                                                                      | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the workspace member actor assigned to this task.                              | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                                                     |