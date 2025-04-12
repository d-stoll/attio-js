# Author

The workspace member who wrote this comment. Note that other types of actors are not currently supported.

## Example Usage

```typescript
import { Author } from "attio-js/models/operations";

let value: Author = {
  type: "workspace-member",
  id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | [operations.DataType](../../models/operations/datatype.md) | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |