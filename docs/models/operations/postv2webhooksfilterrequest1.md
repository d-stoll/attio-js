# PostV2WebhooksFilterRequest1

## Example Usage

```typescript
import { PostV2WebhooksFilterRequest1 } from "attio-js/models/operations/postv2webhooks.js";

let value: PostV2WebhooksFilterRequest1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "equals",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `dollarOr`                                        | *operations.PostV2WebhooksDollarOrRequestUnion*[] | :heavy_check_mark:                                | N/A                                               |