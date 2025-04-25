# PatchV2WebhooksWebhookIdFilterResponse2

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdFilterResponse2 } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdFilterResponse2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `dollarAnd`                                                   | *operations.PatchV2WebhooksWebhookIdDollarAndResponseUnion*[] | :heavy_check_mark:                                            | N/A                                                           |