# PostV2ListsListEntriesQuerySort1

Sort by attribute

## Example Usage

```typescript
import { PostV2ListsListEntriesQuerySort1 } from "attio-js/models/operations/postv2listslistentriesquery.js";

let value: PostV2ListsListEntriesQuerySort1 = {
  direction: "desc",
  attribute: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `direction`                                                                                                          | [operations.PostV2ListsListEntriesQueryDirection1](../../models/operations/postv2listslistentriesquerydirection1.md) | :heavy_check_mark:                                                                                                   | The direction to sort the results by.                                                                                |
| `attribute`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | A slug or ID to identify the attribute to sort by.                                                                   |
| `field`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Which field on the value to sort by e.g. "last_name" on a name value.                                                |