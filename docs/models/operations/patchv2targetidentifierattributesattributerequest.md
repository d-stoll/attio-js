# PatchV2TargetIdentifierAttributesAttributeRequest

## Example Usage

```typescript
import { PatchV2TargetIdentifierAttributesAttributeRequest } from "attio-js/models/operations/patchv2targetidentifierattributesattribute.js";

let value: PatchV2TargetIdentifierAttributesAttributeRequest = {
  target: "lists",
  identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                                                             | [operations.PatchV2TargetIdentifierAttributesAttributeTarget](../../models/operations/patchv2targetidentifierattributesattributetarget.md)           | :heavy_check_mark:                                                                                                                                   | Whether the attribute is on an object or a list.                                                                                                     | lists                                                                                                                                                |
| `identifier`                                                                                                                                         | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                                                                 |
| `attribute`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                                                                                 |
| `requestBody`                                                                                                                                        | [operations.PatchV2TargetIdentifierAttributesAttributeRequestBody](../../models/operations/patchv2targetidentifierattributesattributerequestbody.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |                                                                                                                                                      |