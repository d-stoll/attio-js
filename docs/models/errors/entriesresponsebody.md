# EntriesResponseBody

Bad Request

## Example Usage

```typescript
import { EntriesResponseBody } from "attio-js/models/errors";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `statusCode`                                                       | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `type`                                                             | [errors.Response400Type](../../models/errors/response400type.md)   | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `code`                                                             | [errors.EntriesCode](../../models/errors/entriescode.md)           | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | The parent record for a list entry cannot be updated once created. |