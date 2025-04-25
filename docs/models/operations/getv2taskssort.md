# GetV2TasksSort

Optionally sort the results. "created_at:asc" returns oldest results first, "created_at:desc" returns the newest results first. If unspecified, defaults to "created_at:asc" (oldest results first).

## Example Usage

```typescript
import { GetV2TasksSort } from "attio-js/models/operations/getv2tasks.js";

let value: GetV2TasksSort = "created_at:desc";
```

## Values

```typescript
"created_at:asc" | "created_at:desc"
```