# OutputValueEmailAddress

## Example Usage

```typescript
import { OutputValueEmailAddress } from "attio-js/models/components/outputvalue.js";

let value: OutputValueEmailAddress = {
  originalEmailAddress: "alice@app.attio.com",
  emailAddress: "alice@app.attio.com",
  emailDomain: "app.attio.com",
  emailRootDomain: "attio.com",
  emailLocalSpecifier: "alice",
  attributeType: "email-address",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `originalEmailAddress`                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | alice@app.attio.com                                                                          |
| `emailAddress`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | alice@app.attio.com                                                                          |
| `emailDomain`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | app.attio.com                                                                                |
| `emailRootDomain`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | attio.com                                                                                    |
| `emailLocalSpecifier`                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | alice                                                                                        |
| `attributeType`                                                                              | [components.AttributeTypeEmailAddress](../../models/components/attributetypeemailaddress.md) | :heavy_check_mark:                                                                           | The attribute type of the value.                                                             | email-address                                                                                |