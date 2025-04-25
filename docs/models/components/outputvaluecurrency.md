# OutputValueCurrency

## Example Usage

```typescript
import { OutputValueCurrency } from "attio-js/models/components/outputvalue.js";

let value: OutputValueCurrency = {
  currencyValue: 99,
  currencyCode: "USD",
  attributeType: "currency",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `currencyValue`                                                                             | *number*                                                                                    | :heavy_check_mark:                                                                          | A numerical representation of the currency value. A decimal with a max of 4 decimal places. | 99                                                                                          |
| `currencyCode`                                                                              | [components.CurrencyCode](../../models/components/currencycode.md)                          | :heavy_minus_sign:                                                                          | The ISO4217 currency code representing the currency that the value is stored in.            | USD                                                                                         |
| `attributeType`                                                                             | [components.AttributeTypeCurrency](../../models/components/attributetypecurrency.md)        | :heavy_check_mark:                                                                          | The attribute type of the value.                                                            | currency                                                                                    |