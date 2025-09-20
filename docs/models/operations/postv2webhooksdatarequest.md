# PostV2WebhooksDataRequest

## Example Usage

```typescript
import { PostV2WebhooksDataRequest } from "attio-js/models/operations/postv2webhooks.js";

let value: PostV2WebhooksDataRequest = {
  targetUrl: "https://example.com/webhook",
  subscriptions: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `targetUrl`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | URL where the webhook events will be delivered to.                                                             | https://example.com/webhook                                                                                    |
| `subscriptions`                                                                                                | [operations.PostV2WebhooksSubscriptionRequest](../../models/operations/postv2webhookssubscriptionrequest.md)[] | :heavy_check_mark:                                                                                             | One or more events the webhook is subscribed to.                                                               |                                                                                                                |