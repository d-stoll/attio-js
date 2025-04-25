# PatchV2WebhooksWebhookIdRequestBody

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdRequestBody } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdRequestBody = {
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
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [operations.PatchV2WebhooksWebhookIdDataRequest](../../models/operations/patchv2webhookswebhookiddatarequest.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |