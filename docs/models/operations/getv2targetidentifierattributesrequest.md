# GetV2TargetIdentifierAttributesRequest

## Example Usage

```typescript
import { GetV2TargetIdentifierAttributesRequest } from "attio-js/models/operations/getv2targetidentifierattributes.js";

let value: GetV2TargetIdentifierAttributesRequest = {
  target: "lists",
  identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  limit: 10,
  offset: 5,
  showArchived: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                             | [operations.GetV2TargetIdentifierAttributesTarget](../../models/operations/getv2targetidentifierattributestarget.md) | :heavy_check_mark:                                                                                                   | Whether the attributes are on an object or a list.                                                                   | lists                                                                                                                |
| `identifier`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                                 |
| `limit`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | 10                                                                                                                   |
| `offset`                                                                                                             | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | 5                                                                                                                    |
| `showArchived`                                                                                                       | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  | true                                                                                                                 |