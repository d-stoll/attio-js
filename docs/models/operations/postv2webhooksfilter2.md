# PostV2WebhooksFilter2

## Example Usage

```typescript
import { PostV2WebhooksFilter2 } from "attio-js/models/operations";

let value: PostV2WebhooksFilter2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `dollarAnd`                                  | *operations.PostV2WebhooksFilterDollarAnd*[] | :heavy_check_mark:                           | N/A                                          |