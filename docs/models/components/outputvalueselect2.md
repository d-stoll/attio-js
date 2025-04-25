# OutputValueSelect2

## Example Usage

```typescript
import { OutputValueSelect2 } from "attio-js/models/components/outputvalue.js";

let value: OutputValueSelect2 = {
  option: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
      optionId: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
    },
    title: "Medium",
    isArchived: false,
  },
  attributeType: "select",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `option`                                                                           | [components.SelectOption](../../models/components/selectoption.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `attributeType`                                                                    | [components.AttributeTypeSelect2](../../models/components/attributetypeselect2.md) | :heavy_check_mark:                                                                 | The attribute type of the value.                                                   | select                                                                             |