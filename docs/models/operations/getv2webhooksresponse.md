# GetV2WebhooksResponse

Success

## Example Usage

```typescript
import { GetV2WebhooksResponse } from "attio-js/models/operations/getv2webhooks.js";

let value: GetV2WebhooksResponse = {
  data: [
    {
      targetUrl: "https://example.com/webhook",
      subscriptions: [],
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
      },
      status: "active",
      createdAt: "2023-04-27T13:22:49.061281000Z",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.GetV2WebhooksData](../../models/operations/getv2webhooksdata.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |