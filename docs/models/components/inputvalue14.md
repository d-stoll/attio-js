# InputValue14

## Example Usage

```typescript
import { InputValue14 } from "attio-js/models/components";

let value: InputValue14 = {
  originalPhoneNumber: "+15558675309",
  countryCode: "GB",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                                                                                               | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | A phone number which is either a) prefixed with a country code (e.g. `+44....`) or b) a local number, where `country_code` is specified in addition.                | +15558675309                                                                                                                                                        |
| `countryCode`                                                                                                                                                       | [components.InputValue14CountryCode](../../models/components/inputvalue14countrycode.md)                                                                            | :heavy_minus_sign:                                                                                                                                                  | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. Optional if `original_phone_number` includes a country code prefix. | GB                                                                                                                                                                  |