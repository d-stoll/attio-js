# Three

## Example Usage

```typescript
import { Three } from "attio-js/models/components";

let value: Three = {
  currencyValue: 99,
  currencyCode: "USD",
  attributeType: "currency",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `currencyValue`                                                                              | *number*                                                                                     | :heavy_check_mark:                                                                           | A numerical representation of the currency value. A decimal with a max of 4 decimal places.  | 99                                                                                           |
| `currencyCode`                                                                               | [components.CurrencyCode](../../models/components/currencycode.md)                           | :heavy_minus_sign:                                                                           | The ISO4217 currency code representing the currency that the value is stored in.             | USD                                                                                          |
| `attributeType`                                                                              | [components.OutputValue3AttributeType](../../models/components/outputvalue3attributetype.md) | :heavy_check_mark:                                                                           | The attribute type of the value.                                                             | currency                                                                                     |