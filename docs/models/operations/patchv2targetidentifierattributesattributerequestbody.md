# PatchV2TargetIdentifierAttributesAttributeRequestBody

## Example Usage

```typescript
import { PatchV2TargetIdentifierAttributesAttributeRequestBody } from "attio-js/models/operations";

let value: PatchV2TargetIdentifierAttributesAttributeRequestBody = {
  data: {
    title: "Your Attribute",
    description: "Lorem ipsum",
    apiSlug: "my-attribute",
    isRequired: true,
    isUnique: true,
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
    isArchived: false,
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                 | [operations.PatchV2TargetIdentifierAttributesAttributeData](../../models/operations/patchv2targetidentifierattributesattributedata.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |