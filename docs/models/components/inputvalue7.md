# InputValue7

## Example Usage

```typescript
import { InputValue7 } from "attio-js/models/components/inputvalueunion.js";

let value: InputValue7 = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `targetObject`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | A UUID or slug to identify the object that the referenced record belongs to. | people                                                                       |
| `targetRecordId`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | A UUID to identify the referenced record.                                    | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                         |