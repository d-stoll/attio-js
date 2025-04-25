# PostV2ListsListEntriesQueryRequestBody

## Example Usage

```typescript
import { PostV2ListsListEntriesQueryRequestBody } from "attio-js/models/operations/postv2listslistentriesquery.js";

let value: PostV2ListsListEntriesQueryRequestBody = {
  filter: {
    "name": "Ada Lovelace",
  },
  sorts: [
    {
      direction: "asc",
      attribute: "name",
      field: "last_name",
    },
  ],
  limit: 500,
  offset: 0,
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                                                  | Record<string, *any*>                                                                                                                     | :heavy_minus_sign:                                                                                                                        | An object used to filter results to a subset of results. See the [full guide to filtering and sorting here](/docs/filtering-and-sorting). | {<br/>"name": "Ada Lovelace"<br/>}                                                                                                        |
| `sorts`                                                                                                                                   | *operations.PostV2ListsListEntriesQuerySortUnion*[]                                                                                       | :heavy_minus_sign:                                                                                                                        | An object used to sort results. See the [full guide to filtering and sorting here](/docs/filtering-and-sorting).                          | [<br/>{<br/>"direction": "asc",<br/>"attribute": "name",<br/>"field": "last_name"<br/>}<br/>]                                             |
| `limit`                                                                                                                                   | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The maximum number of results to return. Defaults to 500. See the [full guide to pagination here](/docs/pagination).                      | 500                                                                                                                                       |
| `offset`                                                                                                                                  | *number*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The number of results to skip over before returning. Defaults to 0. See the [full guide to pagination here](/docs/pagination).            | 0                                                                                                                                         |