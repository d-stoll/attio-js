# PostV2TargetIdentifierAttributesTemplate

For actor reference attributes, you may pass a dynamic value of `"current-user"`. When creating new records or entries, this will cause the actor reference value to be populated with either the workspace member or API token that created the record/entry.

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesTemplate } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesTemplate = "current-user";
```

## Values

```typescript
"current-user"
```