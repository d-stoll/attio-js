# PatchV2ListsListWorkspaceAccess

The level of access granted to all members of the workspace for this list. Pass `null` to keep the list private and only grant access to specific workspace members.

## Example Usage

```typescript
import { PatchV2ListsListWorkspaceAccess } from "attio-js/models/operations/patchv2listslist.js";

let value: PatchV2ListsListWorkspaceAccess = "read-and-write";
```

## Values

```typescript
"full-access" | "read-and-write" | "read-only"
```