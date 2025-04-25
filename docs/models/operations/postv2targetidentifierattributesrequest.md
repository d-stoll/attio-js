# PostV2TargetIdentifierAttributesRequest

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesRequest } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesRequest = {
  target: "lists",
  identifier: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                                         | [operations.PostV2TargetIdentifierAttributesTarget](../../models/operations/postv2targetidentifierattributestarget.md)           | :heavy_check_mark:                                                                                                               | Whether the attribute is to be created on an object or a list.                                                                   | lists                                                                                                                            |
| `identifier`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              | 97052eb9-e65e-443f-a297-f2d9a4a7f795                                                                                             |
| `requestBody`                                                                                                                    | [operations.PostV2TargetIdentifierAttributesRequestBody](../../models/operations/postv2targetidentifierattributesrequestbody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |