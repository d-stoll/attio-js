# Filter2

## Example Usage

```typescript
import { Filter2 } from "attio-js/models/operations";

let value: Filter2 = {
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

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `dollarAnd`              | *operations.DollarAnd*[] | :heavy_check_mark:       | N/A                      |