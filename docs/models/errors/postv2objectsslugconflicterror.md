# PostV2ObjectsSlugConflictError

Conflict

## Example Usage

```typescript
import { PostV2ObjectsSlugConflictError } from "attio-js/models/errors/getv2objectsobject.js";

// No examples available for this model
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `type`                                                                     | [errors.ConflictType](../../models/errors/conflicttype.md)                 | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `code`                                                                     | [errors.ConflictCode](../../models/errors/conflictcode.md)                 | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `message`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | Failed to create object. Please ensure your api_slug and names are unique. |