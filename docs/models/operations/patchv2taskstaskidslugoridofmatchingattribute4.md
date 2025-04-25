# PatchV2TasksTaskIdSlugOrIdOfMatchingAttribute4

## Example Usage

```typescript
import { PatchV2TasksTaskIdSlugOrIdOfMatchingAttribute4 } from "attio-js/models/operations/patchv2taskstaskid.js";

let value: PatchV2TasksTaskIdSlugOrIdOfMatchingAttribute4 = {
  originalPhoneNumber: "07234172834",
  countryCode: "GB",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The raw, original phone number, as inputted.                                                         | 07234172834                                                                                          |
| `countryCode`                                                                                        | [operations.PatchV2TasksTaskIdCountryCode](../../models/operations/patchv2taskstaskidcountrycode.md) | :heavy_minus_sign:                                                                                   | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to.      | GB                                                                                                   |