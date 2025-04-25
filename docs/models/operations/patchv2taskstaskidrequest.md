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
          targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        },
      ],
      assignees: [
        {
          workspaceMemberEmailAddress: "alice@attio.com",
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