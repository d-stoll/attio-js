# PostV2CommentsRequest

## Example Usage

```typescript
import { PostV2CommentsRequest } from "attio-js/models/operations/postv2comments.js";

let value: PostV2CommentsRequest = {
  data: {
    format: "plaintext",
    content:
      "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
    author: {
      type: "workspace-member",
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    },
    createdAt: "2023-01-01T15:00:00.000000000Z",
    entry: {
      list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
      entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
    },
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `data`                               | *operations.PostV2CommentsDataUnion* | :heavy_check_mark:                   | N/A                                  |