# PatchV2WebhooksWebhookIdDataResponse

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdDataResponse } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdDataResponse = {
  targetUrl: "https://example.com/webhook",
  subscriptions: [
    {
      eventType: "note.created",
      filter: {
        dollarAnd: [
          {
            field: "parent_object_id",
            operator: "equals",
            value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
          },
        ],
      },
    },
  ],
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
  },
  status: "active",
  createdAt: "2023-04-27T13:22:49.061281000Z",
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `targetUrl`                                                                                                                                                                                      | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | URL where the webhook events will be delivered to.                                                                                                                                               | https://example.com/webhook                                                                                                                                                                      |
| `subscriptions`                                                                                                                                                                                  | [operations.PatchV2WebhooksWebhookIdSubscriptionResponse](../../models/operations/patchv2webhookswebhookidsubscriptionresponse.md)[]                                                             | :heavy_check_mark:                                                                                                                                                                               | One or more events the webhook is subscribed to.                                                                                                                                                 |                                                                                                                                                                                                  |
| `id`                                                                                                                                                                                             | [operations.PatchV2WebhooksWebhookIdId](../../models/operations/patchv2webhookswebhookidid.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                         | [operations.PatchV2WebhooksWebhookIdStatus](../../models/operations/patchv2webhookswebhookidstatus.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                               | The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive. | active                                                                                                                                                                                           |
| `createdAt`                                                                                                                                                                                      | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | When the webhook was created.                                                                                                                                                                    | 2023-04-27T13:22:49.061281000Z                                                                                                                                                                   |