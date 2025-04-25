# Config

Additional, type-dependent configuration for the attribute.

## Example Usage

```typescript
import { Config } from "attio-js/models/components/attribute.js";

let value: Config = {
  currency: {
    defaultCurrencyCode: "USD",
    displayType: "code",
  },
  recordReference: {
    allowedObjectIds: [
      "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `currency`                                                               | [components.Currency](../../models/components/currency.md)               | :heavy_check_mark:                                                       | Configuration available for attributes of type "currency".               |
| `recordReference`                                                        | [components.RecordReference](../../models/components/recordreference.md) | :heavy_check_mark:                                                       | Configuration available for attributes of type "record-reference".       |