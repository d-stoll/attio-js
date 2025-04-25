# PatchV2WebhooksWebhookIdSubscriptionRequest

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdSubscriptionRequest } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdSubscriptionRequest = {
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
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `eventType`                                                                                                                | [operations.PatchV2WebhooksWebhookIdEventTypeRequest](../../models/operations/patchv2webhookswebhookideventtyperequest.md) | :heavy_check_mark:                                                                                                         | Type of event the webhook is subscribed to.                                                                                | note.created                                                                                                               |
| `filter`                                                                                                                   | *operations.PatchV2WebhooksWebhookIdFilterRequestUnion*                                                                    | :heavy_check_mark:                                                                                                         | Filters to determine whether the webhook event should be sent. If null, the filter always passes.                          | {<br/>"$and": [<br/>{<br/>"field": "parent_object_id",<br/>"operator": "equals",<br/>"value": "97052eb9-e65e-443f-a297-f2d9a4a7f795"<br/>}<br/>]<br/>} |