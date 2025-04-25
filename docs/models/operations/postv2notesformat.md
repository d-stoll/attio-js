# PostV2NotesFormat

The format of the note content to be created. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. The `markdown` format supports rich text formatting, and links.

## Example Usage

```typescript
import { PostV2NotesFormat } from "attio-js/models/operations/postv2notes.js";

let value: PostV2NotesFormat = "plaintext";
```

## Values

```typescript
"plaintext" | "markdown"
```