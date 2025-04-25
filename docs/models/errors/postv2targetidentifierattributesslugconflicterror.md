# PostV2TargetIdentifierAttributesSlugConflictError

Conflict

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesSlugConflictError } from "attio-js/models/errors/getv2objectsobject.js";

// No examples available for this model
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `statusCode`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `type`                                                                                               | [errors.ConflictType](../../models/errors/conflicttype.md)                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `code`                                                                                               | [errors.ConflictCode](../../models/errors/conflictcode.md)                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `message`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  | An attribute with the same API slug already exists on this list. Please choose a different API slug. |