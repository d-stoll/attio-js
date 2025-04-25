# PostV2TasksSlugOrIdOfMatchingAttribute4

## Example Usage

```typescript
import { PostV2TasksSlugOrIdOfMatchingAttribute4 } from "attio-js/models/operations/postv2tasks.js";

let value: PostV2TasksSlugOrIdOfMatchingAttribute4 = {
  originalPhoneNumber: "07234172834",
  countryCode: "GB",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `originalPhoneNumber`                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | The raw, original phone number, as inputted.                                                    | 07234172834                                                                                     |
| `countryCode`                                                                                   | [operations.PostV2TasksCountryCode](../../models/operations/postv2taskscountrycode.md)          | :heavy_minus_sign:                                                                              | The ISO 3166-1 alpha-2 country code representing the country that this phone number belongs to. | GB                                                                                              |