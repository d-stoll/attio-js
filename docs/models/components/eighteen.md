# Eighteen

## Example Usage

```typescript
import { Eighteen } from "attio-js/models/components";

let value: Eighteen = {
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  attributeType: "text",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                     | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A raw text field. Values are limited to 10MB.                                                                               | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| `attributeType`                                                                                                             | [components.OutputValue18AttributeType](../../models/components/outputvalue18attributetype.md)                              | :heavy_check_mark:                                                                                                          | The attribute type of the value.                                                                                            | text                                                                                                                        |