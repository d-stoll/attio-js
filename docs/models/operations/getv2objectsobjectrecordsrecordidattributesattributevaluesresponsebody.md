# GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponseBody

Success

## Example Usage

```typescript
import { GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponseBody } from "attio-js/models/operations";

let value:
  GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponseBody = {
    data: [
      {
        activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
        activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
        createdByActor: {
          id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          type: "workspace-member",
        },
        targetObject: "people",
        targetRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
        attributeType: "record-reference",
      },
    ],
  };
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | *operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesData*[] | :heavy_check_mark:                                                            | N/A                                                                           |