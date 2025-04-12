# PostV2WebhooksRequestBody

## Example Usage

```typescript
import { PostV2WebhooksRequestBody } from "attio-js/models/operations";

let value: PostV2WebhooksRequestBody = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.PostV2WebhooksData](../../models/operations/postv2webhooksdata.md) | :heavy_check_mark:                                                             | N/A                                                                            |