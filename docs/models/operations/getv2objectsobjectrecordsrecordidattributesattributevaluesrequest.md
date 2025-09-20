# GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequest

## Example Usage

```typescript
import { GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequest } from "attio-js/models/operations/getv2objectsobjectrecordsrecordidattributesattributevalues.js";

let value: GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesRequest = {
  object: "people",
  recordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  showHistoric: true,
  limit: 10,
  offset: 5,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `object`                             | *string*                             | :heavy_check_mark:                   | N/A                                  | people                               |
| `recordId`                           | *string*                             | :heavy_check_mark:                   | N/A                                  | 891dcbfc-9141-415d-9b2a-2238a6cc012d |
| `attribute`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | 41252299-f8c7-4b5e-99c9-4ff8321d2f96 |
| `showHistoric`                       | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | N/A                                  | 10                                   |
| `offset`                             | *number*                             | :heavy_minus_sign:                   | N/A                                  | 5                                    |