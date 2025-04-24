# PostV2NotesRequestBody

## Example Usage

```typescript
import { PostV2NotesRequestBody } from "attio-js/models/operations";

let value: PostV2NotesRequestBody = {
  data: {
    parentObject: "people",
    parentRecordId: "891dcbfc-9141-415d-9b2a-2238a6cc012d",
    title: "Initial Prospecting Call Summary",
    format: "plaintext",
    content: "Introduction\n"
      + "Date and time of the call\n"
      + "Participants\n"
      + "Purpose of the call\n"
      + "Customer Background\n"
      + "Company overview (industry, size, location)\n"
      + "Key business challenges\n"
      + "Current software solutions (if any) and pain points",
    createdAt: "2023-01-01T15:00:00.000000000Z",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.PostV2NotesData](../../models/operations/postv2notesdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |