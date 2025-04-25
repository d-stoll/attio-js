# PostV2WebhooksRequest

## Example Usage

```typescript
import { PostV2WebhooksRequest } from "attio-js/models/operations/postv2webhooks.js";

let value: PostV2WebhooksRequest = {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.PostV2WebhooksDataRequest](../../models/operations/postv2webhooksdatarequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |