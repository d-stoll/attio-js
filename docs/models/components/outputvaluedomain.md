# OutputValueDomain

## Example Usage

```typescript
import { OutputValueDomain } from "attio-js/models/components/outputvalue.js";

let value: OutputValueDomain = {
  domain: "app.attio.com",
  rootDomain: "attio.com",
  attributeType: "domain",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `domain`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | app.attio.com                                                                    |
| `rootDomain`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | attio.com                                                                        |
| `attributeType`                                                                  | [components.AttributeTypeDomain](../../models/components/attributetypedomain.md) | :heavy_check_mark:                                                               | The attribute type of the value.                                                 | domain                                                                           |