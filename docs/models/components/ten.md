# Ten

## Example Usage

```typescript
import { Ten } from "attio-js/models/components";

let value: Ten = {
  value: 42,
  attributeType: "number",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `value`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | Numbers are persisted as 64 bit floats.                                                        | 42                                                                                             |
| `attributeType`                                                                                | [components.OutputValue10AttributeType](../../models/components/outputvalue10attributetype.md) | :heavy_check_mark:                                                                             | The attribute type of the value.                                                               | number                                                                                         |