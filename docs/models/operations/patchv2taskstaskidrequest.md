# PatchV2TasksTaskIdRequest

## Example Usage

```typescript
import { PatchV2TasksTaskIdRequest } from "attio-js/models/operations/patchv2taskstaskid.js";

let value: PatchV2TasksTaskIdRequest = {
  taskId: "649e34f4-c39a-4f4d-99ef-48a36bef8f04",
  requestBody: {
    data: {
      deadlineAt: "2023-01-01T15:00:00.000000000Z",
      isCompleted: false,
      linkedRecords: [
        {
          targetObject: "people",
          slugOrIdOfMatchingAttribute: [],
        },
      ],
      assignees: [
        {
          referencedActorType: "workspace-member",
          referencedActorId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `taskId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | 649e34f4-c39a-4f4d-99ef-48a36bef8f04                                                                 |
| `requestBody`                                                                                        | [operations.PatchV2TasksTaskIdRequestBody](../../models/operations/patchv2taskstaskidrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |