# ListId

## Example Usage

```typescript
import { ListId } from "attio-js/models/components/list.js";

let value: ListId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `workspaceId`                                          | *string*                                               | :heavy_check_mark:                                     | A UUID to identify the workspace this list belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                   |
| `listId`                                               | *string*                                               | :heavy_check_mark:                                     | A UUID to identify this list.                          | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                   |