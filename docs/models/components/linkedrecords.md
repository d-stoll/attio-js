# LinkedRecords

## Example Usage

```typescript
import { LinkedRecords } from "attio-js/models/components";

let value: LinkedRecords = {
  targetObjectId: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `targetObjectId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the parent object the task refers to. At present, only `people` and `companies` are supported. | people                                                                                                   |
| `targetRecordId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the parent record the task refers to.                                                          | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                                     |