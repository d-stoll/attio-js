# PatchV2WebhooksWebhookIdResponseBody

Success

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdResponseBody } from "attio-js/models/operations";

let value: PatchV2WebhooksWebhookIdResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.PatchV2WebhooksWebhookIdWebhooksData](../../models/operations/patchv2webhookswebhookidwebhooksdata.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |