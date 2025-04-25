# LinkedRecord

## Example Usage

```typescript
import { LinkedRecord } from "attio-js/models/components/task.js";

let value: LinkedRecord = {
  targetObjectId: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `targetObjectId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the parent object the task refers to. At present, only `people` and `companies` are supported. | people                                                                                                   |
| `targetRecordId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the parent record the task refers to.                                                          | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                                     |