# Sixteen

## Example Usage

```typescript
import { Sixteen } from "attio-js/models/components";

let value: Sixteen = {
  option: "08c2c59a-c18e-40c6-8dc4-95415313b2ea",
  attributeType: "select",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `option`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | The UUID identifying the selected select option.                                               | 08c2c59a-c18e-40c6-8dc4-95415313b2ea                                                           |
| `attributeType`                                                                                | [components.OutputValue16AttributeType](../../models/components/outputvalue16attributetype.md) | :heavy_check_mark:                                                                             | The attribute type of the value.                                                               | select                                                                                         |