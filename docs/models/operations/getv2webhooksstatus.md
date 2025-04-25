# GetV2WebhooksStatus

The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.

## Example Usage

```typescript
import { GetV2WebhooksStatus } from "attio-js/models/operations/getv2webhooks.js";

let value: GetV2WebhooksStatus = "active";
```

## Values

```typescript
"active" | "degraded" | "inactive"
```