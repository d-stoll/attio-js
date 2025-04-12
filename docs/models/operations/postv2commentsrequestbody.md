# PostV2CommentsRequestBody

## Example Usage

```typescript
import { PostV2CommentsRequestBody } from "attio-js/models/operations";

let value: PostV2CommentsRequestBody = {
  data: {
    format: "plaintext",
    content:
      "If I put the email address of my colleague on Attio in here, e.g. alice@attio.com, they will be notified. Other emails (e.g. person@example.com) will be turned into clickable links.",
    author: {
      type: "workspace-member",
      id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
    },
    createdAt: "2023-01-01T15:00:00.000000000Z",
    threadId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
  },
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `data`                          | *operations.PostV2CommentsData* | :heavy_check_mark:              | N/A                             |