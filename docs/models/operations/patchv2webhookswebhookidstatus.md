# PatchV2WebhooksWebhookIdStatus

The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdStatus } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdStatus = "active";
```

## Values

```typescript
"active" | "degraded" | "inactive"
```