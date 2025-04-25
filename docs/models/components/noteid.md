# NoteId

## Example Usage

```typescript
import { NoteId } from "attio-js/models/components/note.js";

let value: NoteId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `workspaceId`                                | *string*                                     | :heavy_check_mark:                           | The ID of the workspace the note belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c         |
| `noteId`                                     | *string*                                     | :heavy_check_mark:                           | The ID of the note.                          | ff3f3bd4-40f4-4f80-8187-cd02385af424         |