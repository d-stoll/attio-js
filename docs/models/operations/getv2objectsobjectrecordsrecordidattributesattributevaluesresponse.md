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
        line1: "1 Infinite Loop",
        line2: "Block 1",
        line3: "Hilldrop Estate",
        line4: "Westborough",
        locality: "Cupertino",
        region: "CA",
        postcode: "95014",
        countryCode: "US",
        latitude: "37.331741",
        longitude: "-122.030333",
        attributeType: "location",
      },
    ],
  };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | *operations.GetV2ObjectsObjectRecordsRecordIdAttributesAttributeValuesDataUnion*[] | :heavy_check_mark:                                                                 | N/A                                                                                |