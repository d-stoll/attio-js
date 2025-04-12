# PostV2WebhooksResponseBody

Success

## Example Usage

```typescript
import { PostV2WebhooksResponseBody } from "attio-js/models/operations";

let value: PostV2WebhooksResponseBody = {
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
    secret: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.PostV2WebhooksWebhooksData](../../models/operations/postv2webhookswebhooksdata.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |