# Config

## Example Usage

```typescript
import { Config } from "attio-js/models/operations";

let value: Config = {
  currency: {
    defaultCurrencyCode: "USD",
    displayType: "symbol",
  },
  recordReference: {
    allowedObjects: [
      "people",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `currency`                                                               | [operations.Currency](../../models/operations/currency.md)               | :heavy_minus_sign:                                                       | Configuration available for attributes of type "currency".               |
| `recordReference`                                                        | [operations.RecordReference](../../models/operations/recordreference.md) | :heavy_minus_sign:                                                       | Configuration available for attributes of type "record-reference".       |