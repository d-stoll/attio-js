# PatchV2TasksTaskIdRequestBody

## Example Usage

```typescript
import { PatchV2TasksTaskIdRequestBody } from "attio-js/models/operations/patchv2taskstaskid.js";

let value: PatchV2TasksTaskIdRequestBody = {
  data: {
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.PatchV2TasksTaskIdData](../../models/operations/patchv2taskstaskiddata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |