# DefaultValueStatic

## Example Usage

```typescript
import { DefaultValueStatic } from "attio-js/models/components/attribute.js";

let value: DefaultValueStatic = {
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [components.TypeStatic](../../models/components/typestatic.md) | :heavy_check_mark:                                             | N/A                                                            | static                                                         |
| `template`                                                     | *components.OutputValue*[]                                     | :heavy_check_mark:                                             | N/A                                                            | [<br/>{<br/>"value": "Some default text",<br/>"attribute_type": "text"<br/>}<br/>] |