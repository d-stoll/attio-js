# PostV2TargetIdentifierAttributesRequestBody

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesRequestBody } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesRequestBody = {
  data: {
    title: "Your Attribute",
    description: "Lorem ipsum",
    apiSlug: "my-attribute",
    type: "text",
    isRequired: true,
    isUnique: true,
    isMultiselect: true,
    defaultValue: {
      type: "static",
      template: [
        {
          value: 5,
        },
      ],
    },
    config: {
      currency: {
        defaultCurrencyCode: "USD",
        displayType: "symbol",
      },
      recordReference: {
        allowedObjects: [
          "people",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.PostV2TargetIdentifierAttributesData](../../models/operations/postv2targetidentifierattributesdata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |