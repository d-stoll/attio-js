# GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponse

Success

## Example Usage

```typescript
import { GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponse } from "attio-js/models/operations/getv2objectsobjectrecordsrecordidattributesattributevalues.js";

let value: GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesResponse =
  {
    data: [
      {
        activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
        activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
        createdByActor: {
          id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
          type: "workspace-member",
        },
        attributeType: "date",
        value: "2023-01-01",
      },
    ],
  };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | *operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataUnion*[] | :heavy_check_mark:                                                                 | N/A                                                                                |