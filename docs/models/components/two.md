# Two

## Example Usage

```typescript
import { Two } from "attio-js/models/components";

let value: Two = {
  type: "static",
  template: [
    {
      value: "Some default text",
      attributeType: "text",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [components.AttributeDefaultValueType](../../models/components/attributedefaultvaluetype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          | static                                                                                       |
| `template`                                                                                   | *components.OutputValue*[]                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          | [<br/>{<br/>"value": "Some default text",<br/>"attribute_type": "text"<br/>}<br/>]           |