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
    content: "# Meeting Recap: Q4 Planning\n"
      + "\n"
      + "**Date:** 2023-10-26\n"
      + "**Attendees:** Alex, Jamie, Casey\n"
      + "\n"
      + "## Key Discussion Points\n"
      + "\n"
      + "- Reviewed Q3 performance metrics.\n"
      + "- Brainstormed key initiatives for Q4.\n"
      + "- Discussed budget allocation for ==Project Phoenix==.\n"
      + "\n"
      + "## Action Items\n"
      + "\n"
      + "1. Alex to finalize Q4 roadmap by EOD Friday.\n"
      + "2. Jamie to schedule follow-up with [Marketing Team](https://app.attio.com/teams/marketing).\n"
      + "3. Casey to draft initial budget for ~~Project Chimera~~ (now deferred).\n"
      + "\n"
      + "*Next steps: Review draft roadmap next week.*",
    createdAt: "2023-01-01T15:00:00.000000000Z",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.PostV2NotesData](../../models/operations/postv2notesdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |