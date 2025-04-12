# PostV2CommentsResponseBody

Bad Request

## Example Usage

```typescript
import { PostV2CommentsResponseBody } from "attio-js/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `type`                                                                 | [errors.PostV2CommentsType](../../models/errors/postv2commentstype.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `code`                                                                 | [errors.PostV2CommentsCode](../../models/errors/postv2commentscode.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |
| `message`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    | The referenced Thread could not be found, it might have been deleted.  |