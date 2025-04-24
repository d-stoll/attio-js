# Format

The format of the note content to be created. The `plaintext` format uses the line feed character `\n` to create new lines within the note content. The `markdown` format supports rich text formatting, and links.

## Example Usage

```typescript
import { Format } from "attio-js/models/operations";

let value: Format = "plaintext";
```

## Values

```typescript
"plaintext" | "markdown"
```