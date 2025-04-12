# Template1

For actor reference attributes, you may pass a dynamic value of `"current-user"`. When creating new records or entries, this will cause the actor reference value to be populated with either the workspace member or API token that created the record/entry.

## Example Usage

```typescript
import { Template1 } from "attio-js/models/operations";

let value: Template1 = "current-user";
```

## Values

```typescript
"current-user"
```