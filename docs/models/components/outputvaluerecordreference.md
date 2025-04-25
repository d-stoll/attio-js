# OutputValueRecordReference

## Example Usage

```typescript
import { OutputValueRecordReference } from "attio-js/models/components/outputvalue.js";

let value: OutputValueRecordReference = {
  targetObject: "people",
  targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
  attributeType: "record-reference",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `targetObject`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | A slug identifying the object that the referenced record belongs to.                               | people                                                                                             |
| `targetRecordId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | A UUID to identify the referenced record.                                                          | 891dcbfc-9141-415d-9b2a-2238a6cc012d                                                               |
| `attributeType`                                                                                    | [components.AttributeTypeRecordReference](../../models/components/attributetyperecordreference.md) | :heavy_check_mark:                                                                                 | The attribute type of the value.                                                                   | record-reference                                                                                   |