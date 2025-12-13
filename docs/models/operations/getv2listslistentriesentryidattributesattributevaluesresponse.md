# GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponse

Success

## Example Usage

```typescript
import { GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponse } from "attio-js/models/operations/getv2listslistentriesentryidattributesattributevalues.js";

let value: GetV2ListsListEntriesEntryIdAttributesAttributeValuesResponse = {
  data: [
    {
      activeFrom: new Date("2023-01-01T15:00:00.000000000Z"),
      activeUntil: new Date("2023-01-01T15:00:00.000000000Z"),
      createdByActor: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      domain: "app.attio.com",
      rootDomain: "attio.com",
      attributeType: "domain",
    },
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | *operations.GetV2ListsListEntriesEntryIdAttributesAttributeValuesDataUnion*[] | :heavy_check_mark:                                                            | N/A                                                                           |