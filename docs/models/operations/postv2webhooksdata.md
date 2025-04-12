# PostV2WebhooksData

## Example Usage

```typescript
import { PostV2WebhooksData } from "attio-js/models/operations";

let value: PostV2WebhooksData = {
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `targetUrl`                                                            | *string*                                                               | :heavy_check_mark:                                                     | URL where the webhook events will be delivered to.                     | https://example.com/webhook                                            |
| `subscriptions`                                                        | [operations.Subscriptions](../../models/operations/subscriptions.md)[] | :heavy_check_mark:                                                     | One or more events the webhook is subscribed to.                       |                                                                        |