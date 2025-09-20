# GetV2ListsListEntriesEntryIdAttributesAttributeValuesRequest

## Example Usage

```typescript
import { GetV2ListsListEntriesEntryIdAttributesAttributeValuesRequest } from "attio-js/models/operations/getv2listslistentriesentryidattributesattributevalues.js";

let value: GetV2ListsListEntriesEntryIdAttributesAttributeValuesRequest = {
  list: "enterprise_sales",
  entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  showHistoric: true,
  limit: 10,
  offset: 5,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `list`                               | *string*                             | :heavy_check_mark:                   | N/A                                  | enterprise_sales                     |
| `entryId`                            | *string*                             | :heavy_check_mark:                   | N/A                                  | 2e6e29ea-c4e0-4f44-842d-78a891f8c156 |
| `attribute`                          | *string*                             | :heavy_check_mark:                   | N/A                                  | 41252299-f8c7-4b5e-99c9-4ff8321d2f96 |
| `showHistoric`                       | *boolean*                            | :heavy_minus_sign:                   | N/A                                  | true                                 |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | N/A                                  | 10                                   |
| `offset`                             | *number*                             | :heavy_minus_sign:                   | N/A                                  | 5                                    |