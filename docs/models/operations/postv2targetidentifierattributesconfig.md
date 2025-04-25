# PostV2TargetIdentifierAttributesConfig

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesConfig } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesConfig = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                               | [operations.PostV2TargetIdentifierAttributesCurrency](../../models/operations/postv2targetidentifierattributescurrency.md)               | :heavy_minus_sign:                                                                                                                       | Configuration available for attributes of type "currency".                                                                               |
| `recordReference`                                                                                                                        | [operations.PostV2TargetIdentifierAttributesRecordReference](../../models/operations/postv2targetidentifierattributesrecordreference.md) | :heavy_minus_sign:                                                                                                                       | Configuration available for attributes of type "record-reference".                                                                       |