# OutputValueNumber

## Example Usage

```typescript
import { OutputValueNumber } from "attio-js/models/components/outputvalue.js";

let value: OutputValueNumber = {
  value: 42,
  attributeType: "number",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `value`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | Numbers are persisted as 64 bit floats.                                          | 42                                                                               |
| `attributeType`                                                                  | [components.AttributeTypeNumber](../../models/components/attributetypenumber.md) | :heavy_check_mark:                                                               | The attribute type of the value.                                                 | number                                                                           |