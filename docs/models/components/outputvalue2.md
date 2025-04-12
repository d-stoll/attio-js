# OutputValue2

## Example Usage

```typescript
import { OutputValue2 } from "attio-js/models/components";

let value: OutputValue2 = {
  value: true,
  attributeType: "checkbox",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. | true                                                                                                                   |
| `attributeType`                                                                                                        | [components.OutputValueAttributeType](../../models/components/outputvalueattributetype.md)                             | :heavy_check_mark:                                                                                                     | The attribute type of the value.                                                                                       | checkbox                                                                                                               |