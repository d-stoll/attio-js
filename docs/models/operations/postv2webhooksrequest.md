# PostV2WebhooksRequest

## Example Usage

```typescript
import { PostV2WebhooksRequest } from "attio-js/models/operations/postv2webhooks.js";

let value: PostV2WebhooksRequest = {
  data: {
    targetUrl: "https://example.com/webhook",
    subscriptions: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.PostV2WebhooksDataRequest](../../models/operations/postv2webhooksdatarequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |