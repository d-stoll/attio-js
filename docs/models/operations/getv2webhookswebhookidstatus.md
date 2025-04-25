# GetV2WebhooksWebhookIdStatus

The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive.

## Example Usage

```typescript
import { GetV2WebhooksWebhookIdStatus } from "attio-js/models/operations/getv2webhookswebhookid.js";

let value: GetV2WebhooksWebhookIdStatus = "active";
```

## Values

```typescript
"active" | "degraded" | "inactive"
```