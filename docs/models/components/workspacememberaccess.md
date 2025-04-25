# WorkspaceMemberAccess

## Example Usage

```typescript
import { WorkspaceMemberAccess } from "attio-js/models/components/list.js";

let value: WorkspaceMemberAccess = {
  workspaceMemberId: "50cf242c-7fa3-4cad-87d0-75b1af71c57b",
  level: "read-and-write",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceMemberId`                                         | *string*                                                    | :heavy_check_mark:                                          | A UUID to identify the workspace member to grant access to. | 50cf242c-7fa3-4cad-87d0-75b1af71c57b                        |
| `level`                                                     | [components.Level](../../models/components/level.md)        | :heavy_check_mark:                                          | The level of access to the list.                            | read-and-write                                              |