# GetV2ThreadsThreadIdResponse

Success

## Example Usage

```typescript
import { GetV2ThreadsThreadIdResponse } from "attio-js/models/operations/getv2threadsthreadid.js";

let value: GetV2ThreadsThreadIdResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
    },
    comments: [],
    createdAt: "2023-01-01T15:00:00.000000000Z",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [components.Thread](../../models/components/thread.md) | :heavy_check_mark:                                     | N/A                                                    |