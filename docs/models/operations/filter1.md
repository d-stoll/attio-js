# Filter1

## Example Usage

```typescript
import { Filter1 } from "attio-js/models/operations";

let value: Filter1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "equals",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `dollarOr`              | *operations.DollarOr*[] | :heavy_check_mark:      | N/A                     |