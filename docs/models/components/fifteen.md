# Fifteen

## Example Usage

```typescript
import { Fifteen } from "attio-js/models/components";

let value: Fifteen = {
  value: 3,
  attributeType: "rating",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `value`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | A number between 0 and 5 (inclusive) to represent a star rating.                               | 3                                                                                              |
| `attributeType`                                                                                | [components.OutputValue15AttributeType](../../models/components/outputvalue15attributetype.md) | :heavy_check_mark:                                                                             | The attribute type of the value.                                                               | rating                                                                                         |