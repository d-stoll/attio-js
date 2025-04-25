# PostV2TargetIdentifierAttributesType

The type of the attribute. This value affects the possible `config` values. Attributes of type "status" are not supported on objects.

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesType } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesType = "text";
```

## Values

```typescript
"text" | "number" | "checkbox" | "currency" | "date" | "timestamp" | "rating" | "status" | "select" | "record-reference" | "actor-reference" | "location" | "domain" | "email-address" | "phone-number"
```