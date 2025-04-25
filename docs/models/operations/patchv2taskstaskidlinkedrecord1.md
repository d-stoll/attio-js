# PatchV2TasksTaskIdLinkedRecord1

## Example Usage

```typescript
import { PatchV2TasksTaskIdLinkedRecord1 } from "attio-js/models/operations/patchv2taskstaskid.js";

let value: PatchV2TasksTaskIdLinkedRecord1 = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `targetObject`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID or slug of the parent object the tasks refers to. This can reference both standard and custom objects.` | people                                                                                                         |
| `targetRecordId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the parent record the task refers to.                                                                | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                                           |