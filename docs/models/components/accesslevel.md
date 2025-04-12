# AccessLevel

Whether the workspace member is suspended or not and what level of privileges they have inside the workspace. We do not delete workspace members so that you can successfully attribute past actions to suspended workspace members.

## Example Usage

```typescript
import { AccessLevel } from "attio-js/models/components";

let value: AccessLevel = "member";
```

## Values

```typescript
"admin" | "member" | "suspended"
```