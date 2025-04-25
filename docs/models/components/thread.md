# Thread

## Example Usage

```typescript
import { Thread } from "attio-js/models/components/thread.js";

let value: Thread = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
  },
  comments: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        commentId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
      },
      threadId: "aa1dc1d9-93ac-4c6c-987e-16b6eea9aab2",
      contentPlaintext: "Let's go ahead and close this deal, alice@attio.com.",
      entry: {
        entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
        listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
      },
      record: {
        recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
        objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      },
      resolvedAt: "2023-01-01T15:00:00.000000000Z",
      resolvedBy: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
      createdAt: "2023-01-01T15:00:00.000000000Z",
      author: {
        id: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
        type: "workspace-member",
      },
    },
  ],
  createdAt: "2023-01-01T15:00:00.000000000Z",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `id`                                                        | [components.ThreadId](../../models/components/threadid.md)  | :heavy_check_mark:                                          | N/A                                                         |                                                             |
| `comments`                                                  | [components.Comment](../../models/components/comment.md)[]  | :heavy_check_mark:                                          | An array of comments in the thread, sorted by `created_at`. |                                                             |
| `createdAt`                                                 | *string*                                                    | :heavy_check_mark:                                          | When the thread was created.                                | 2023-01-01T15:00:00.000000000Z                              |