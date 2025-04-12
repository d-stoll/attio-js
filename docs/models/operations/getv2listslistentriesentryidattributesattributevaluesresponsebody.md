# GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponseBody

Success

## Example Usage

```typescript
import { GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponseBody } from "attio-js/models/operations";

let value: GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponseBody = {
  data: [
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      value: true,
      attributeType: "checkbox",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | *operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesData*[] | :heavy_check_mark:                                                       | N/A                                                                      |