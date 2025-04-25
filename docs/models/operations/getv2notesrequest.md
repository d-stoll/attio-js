# GetV2NotesRequest

## Example Usage

```typescript
import { GetV2NotesRequest } from "attio-js/models/operations/getv2notes.js";

let value: GetV2NotesRequest = {
  limit: 10,
  offset: 5,
  parentObject: "people",
  parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | N/A                                  | 10                                   |
| `offset`                             | *number*                             | :heavy_minus_sign:                   | N/A                                  | 5                                    |
| `parentObject`                       | *string*                             | :heavy_minus_sign:                   | N/A                                  | people                               |
| `parentRecordId`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  | 891dcbfc-9141-415d-9b2a-2238a6cc012d |