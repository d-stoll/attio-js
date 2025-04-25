# CommentId

## Example Usage

```typescript
import { CommentId } from "attio-js/models/components/comment.js";

let value: CommentId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `workspaceId`                                   | *string*                                        | :heavy_check_mark:                              | The ID of the workspace the comment belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c            |
| `commentId`                                     | *string*                                        | :heavy_check_mark:                              | The ID of the comment.                          | aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2            |