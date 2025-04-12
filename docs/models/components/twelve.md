# Twelve

## Example Usage

```typescript
import { Twelve } from "attio-js/models/components";

let value: Twelve = {
  originalPhoneNumber: "5558675309",
  countryCode: "US",
  phoneNumber: "+15558675309",
  attributeType: "phone-number",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | The raw, original phone number, as inputted.                                                    | 5558675309                                                                                      |
| `countryCode`                                                                                   | [components.OutputValueCountryCode](../../models/components/outputvaluecountrycode.md)          | :heavy_check_mark:                                                                              | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. | US                                                                                              |
| `phoneNumber`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             | +15558675309                                                                                    |
| `attributeType`                                                                                 | [components.OutputValue12AttributeType](../../models/components/outputvalue12attributetype.md)  | :heavy_check_mark:                                                                              | The attribute type of the value.                                                                | phone-number                                                                                    |