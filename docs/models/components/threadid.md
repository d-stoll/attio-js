# ThreadId

## Example Usage

```typescript
import { ThreadId } from "attio-js/models/components";

let value: ThreadId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  threadId: "a649e4d9-435c-43fb-83ba-847b4876f27a",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `workspaceId`                                  | *string*                                       | :heavy_check_mark:                             | The ID of the workspace the thread belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c           |
| `threadId`                                     | *string*                                       | :heavy_check_mark:                             | The ID of the thread.                          | a649e4d9-435c-43fb-83ba-847b4876f27a           |