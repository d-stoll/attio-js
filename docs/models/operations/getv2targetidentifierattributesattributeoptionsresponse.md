# GetV2TargetIdentifierAttributesAttributeOptionsResponse

Success

## Example Usage

```typescript
import { GetV2TargetIdentifierAttributesAttributeOptionsResponse } from "attio-js/models/operations/getv2targetidentifierattributesattributeoptions.js";

let value: GetV2TargetIdentifierAttributesAttributeOptionsResponse = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
        optionId: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
      },
      title: "Medium",
      isArchived: false,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.SelectOption](../../models/components/selectoption.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |