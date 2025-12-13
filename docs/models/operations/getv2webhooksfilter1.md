# GetV2WebhooksFilter1

## Example Usage

```typescript
import { GetV2WebhooksFilter1 } from "attio-js/models/operations/getv2webhooks.js";

let value: GetV2WebhooksFilter1 = {
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

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `dollarOr`                                | *operations.GetV2WebhooksDollarOrUnion*[] | :heavy_check_mark:                        | N/A                                       |