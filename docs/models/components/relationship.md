# Relationship

If this attribute is related to another attribute, this is an object that includes an `id` property that identifies the other attribute. `null` means no relationship exists. See [the help center](https://attio.com/help/reference/managing-your-data/attributes#relationship-attributes) for more details about relationship attributes.

## Example Usage

```typescript
import { Relationship } from "attio-js/models/components";

let value: Relationship = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | [components.AttributeRelationshipId](../../models/components/attributerelationshipid.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |