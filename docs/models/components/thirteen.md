# Thirteen

## Example Usage

```typescript
import { Thirteen } from "attio-js/models/components";

let value: Thirteen = {
  status: "11f07f01-c10f-4e05-a522-33e050bc52ee",
  attributeType: "status",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `status`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | The UUID identifying the selected status.                                                      | 11f07f01-c10f-4e05-a522-33e050bc52ee                                                           |
| `attributeType`                                                                                | [components.OutputValue13AttributeType](../../models/components/outputvalue13attributetype.md) | :heavy_check_mark:                                                                             | The attribute type of the value.                                                               | status                                                                                         |