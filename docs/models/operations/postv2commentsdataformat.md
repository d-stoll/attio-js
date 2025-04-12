# PostV2CommentsDataFormat

The format that the comment content is provided in. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. Rich text formatting and links are not supported.

## Example Usage

```typescript
import { PostV2CommentsDataFormat } from "attio-js/models/operations";

let value: PostV2CommentsDataFormat = "plaintext";
```

## Values

```typescript
"plaintext"
```