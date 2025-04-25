# OutputValueSelect1

## Example Usage

```typescript
import { OutputValueSelect1 } from "attio-js/models/components/outputvalue.js";

let value: OutputValueSelect1 = {
  option: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
  attributeType: "select",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `option`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The UUID identifying the selected select option.                                   | 08c2c59a-c18e-40c6-8dc4-95415313b2ea                                               |
| `attributeType`                                                                    | [components.AttributeTypeSelect1](../../models/components/attributetypeselect1.md) | :heavy_check_mark:                                                                 | The attribute type of the value.                                                   | select                                                                             |