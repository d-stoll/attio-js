# OutputValueCheckbox

## Example Usage

```typescript
import { OutputValueCheckbox } from "attio-js/models/components/outputvalue.js";

let value: OutputValueCheckbox = {
  value: true,
  attributeType: "checkbox",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | A boolean representing whether the checkbox is checked or not. The string values 'true' and 'false' are also accepted. | true                                                                                                                   |
| `attributeType`                                                                                                        | [components.AttributeTypeCheckbox](../../models/components/attributetypecheckbox.md)                                   | :heavy_check_mark:                                                                                                     | The attribute type of the value.                                                                                       | checkbox                                                                                                               |