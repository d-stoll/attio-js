# OutputValueStatus1

## Example Usage

```typescript
import { OutputValueStatus1 } from "attio-js/models/components/outputvalue.js";

let value: OutputValueStatus1 = {
  status: "11f07f01-c10f-4e05-a522-33e050bc52ee",
  attributeType: "status",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `status`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The UUID identifying the selected status.                                          | 11f07f01-c10f-4e05-a522-33e050bc52ee                                               |
| `attributeType`                                                                    | [components.AttributeTypeStatus1](../../models/components/attributetypestatus1.md) | :heavy_check_mark:                                                                 | The attribute type of the value.                                                   | status                                                                             |