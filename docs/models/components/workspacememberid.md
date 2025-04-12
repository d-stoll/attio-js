# WorkspaceMemberId

## Example Usage

```typescript
import { WorkspaceMemberId } from "attio-js/models/components";

let value: WorkspaceMemberId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `workspaceId`                                            | *string*                                                 | :heavy_check_mark:                                       | The ID of the workspace the workspace member belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                     |
| `workspaceMemberId`                                      | *string*                                                 | :heavy_check_mark:                                       | The ID of the workspace member.                          | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                     |