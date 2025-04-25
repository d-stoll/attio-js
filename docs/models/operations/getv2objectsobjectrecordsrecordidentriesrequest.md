# GetV2ObjectsObjectRecordsRecordIdEntriesRequest

## Example Usage

```typescript
import { GetV2ObjectsObjectRecordsRecordIdEntriesRequest } from "attio-js/models/operations/getv2objectsobjectrecordsrecordidentries.js";

let value: GetV2ObjectsObjectRecordsRecordIdEntriesRequest = {
  object: "people",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  limit: 10,
  offset: 5,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `object`                             | *string*                             | :heavy_check_mark:                   | N/A                                  | people                               |
| `recordId`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | 891dcbfc-9141-415d-9b2a-2238a6cc012d |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | N/A                                  | 10                                   |
| `offset`                             | *number*                             | :heavy_minus_sign:                   | N/A                                  | 5                                    |