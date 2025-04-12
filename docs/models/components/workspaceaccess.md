# WorkspaceAccess

The level of access granted to all members of the workspace for this list. `null` values represent a private list that only grants access to specific workspace members via the `workspace_member_access` property.

## Example Usage

```typescript
import { WorkspaceAccess } from "attio-js/models/components";

let value: WorkspaceAccess = "read-and-write";
```

## Values

```typescript
"full-access" | "read-and-write" | "read-only"
```