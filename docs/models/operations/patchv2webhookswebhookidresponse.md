# PatchV2WebhooksWebhookIdResponse

Success

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdResponse } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdResponse = {
  data: {
    targetUrl: "https://example.com/webhook",
    subscriptions: [],
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
| `data`                                                                                                             | [operations.PatchV2WebhooksWebhookIdDataResponse](../../models/operations/patchv2webhookswebhookiddataresponse.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |