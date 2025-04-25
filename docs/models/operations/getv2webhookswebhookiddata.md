# GetV2WebhooksWebhookIdData

## Example Usage

```typescript
import { GetV2WebhooksWebhookIdData } from "attio-js/models/operations/getv2webhookswebhookid.js";

let value: GetV2WebhooksWebhookIdData = {
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
| `subscriptions`                                                                                                                                                                                  | [operations.GetV2WebhooksWebhookIdSubscription](../../models/operations/getv2webhookswebhookidsubscription.md)[]                                                                                 | :heavy_check_mark:                                                                                                                                                                               | One or more events the webhook is subscribed to.                                                                                                                                                 |                                                                                                                                                                                                  |
| `id`                                                                                                                                                                                             | [operations.GetV2WebhooksWebhookIdId](../../models/operations/getv2webhookswebhookidid.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                         | [operations.GetV2WebhooksWebhookIdStatus](../../models/operations/getv2webhookswebhookidstatus.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                               | The state of the webhook. Webhooks marked as active and degraded will receive events, inactive ones will not. If a webhook remains in the degraded state for 7 days, it will be marked inactive. | active                                                                                                                                                                                           |
| `createdAt`                                                                                                                                                                                      | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | When the webhook was created.                                                                                                                                                                    | 2023-04-27T13:22:49.061281000Z                                                                                                                                                                   |