# PostV2NotesResponseBody

Success

## Example Usage

```typescript
import { PostV2NotesResponseBody } from "attio-js/models/operations";

let value: PostV2NotesResponseBody = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      noteId: "ff3f3bd4-40f4-4f80-8187-cd02385af424",
    },
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    title: "Initial Prospecting Call Summary",
    contentPlaintext: "Introduction\n"
      + "Date and time of the call\n"
      + "Participants\n"
      + "Purpose of the call\n"
      + "Customer Background\n"
      + "Company overview (industry, size, location)\n"
      + "Key business challenges\n"
      + "Current software solutions (if any) and pain points",
    contentMarkdown: "# Introduction\n"
      + "Date and time of the call\n"
      + "Participants\n"
      + "Purpose of the call\n"
      + "\n"
      + "## Customer Background\n"
      + "- Company overview (industry, size, location)\n"
      + "- Key business challenges\n"
      + "- Current software solutions (if any) and pain points",
    createdByActor: {
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
      type: "workspace-member",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [components.Note](../../models/components/note.md) | :heavy_check_mark:                                 | N/A                                                |