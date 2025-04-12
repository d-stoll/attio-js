# Five

## Example Usage

```typescript
import { Five } from "attio-js/models/components";

let value: Five = {
  domain: "app.attio.com",
  rootDomain: "attio.com",
  attributeType: "domain",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `domain`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | app.attio.com                                                                                |
| `rootDomain`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | attio.com                                                                                    |
| `attributeType`                                                                              | [components.OutputValue5AttributeType](../../models/components/outputvalue5attributetype.md) | :heavy_check_mark:                                                                           | The attribute type of the value.                                                             | domain                                                                                       |