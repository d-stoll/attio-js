# PatchV2TargetIdentifierAttributesAttributeTemplate

For actor reference attributes, you may pass a dynamic value of `"current-user"`. When creating new records or entries, this will cause the actor reference value to be populated with either the workspace member or API token that created the record/entry.

## Example Usage

```typescript
import { PatchV2TargetIdentifierAttributesAttributeTemplate } from "attio-js/models/operations/patchv2targetidentifierattributesattribute.js";

let value: PatchV2TargetIdentifierAttributesAttributeTemplate = "current-user";
```

## Values

```typescript
"current-user"
```