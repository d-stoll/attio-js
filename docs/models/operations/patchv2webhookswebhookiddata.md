# PatchV2WebhooksWebhookIdData

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdData } from "attio-js/models/operations";

let value: PatchV2WebhooksWebhookIdData = {
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `targetUrl`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | URL where the webhook events will be delivered to.                                                                     | https://example.com/webhook                                                                                            |
| `subscriptions`                                                                                                        | [operations.PatchV2WebhooksWebhookIdSubscriptions](../../models/operations/patchv2webhookswebhookidsubscriptions.md)[] | :heavy_minus_sign:                                                                                                     | One or more events the webhook is subscribed to.                                                                       |                                                                                                                        |