# PatchV2WebhooksWebhookIdSubscriptionResponse

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdSubscriptionResponse } from "attio-js/models/operations/patchv2webhookswebhookid.js";

let value: PatchV2WebhooksWebhookIdSubscriptionResponse = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `eventType`                                                                                                                  | [operations.PatchV2WebhooksWebhookIdEventTypeResponse](../../models/operations/patchv2webhookswebhookideventtyperesponse.md) | :heavy_check_mark:                                                                                                           | Type of event the webhook is subscribed to.                                                                                  | note.created                                                                                                                 |
| `filter`                                                                                                                     | *operations.PatchV2WebhooksWebhookIdFilterResponseUnion*                                                                     | :heavy_check_mark:                                                                                                           | Filters to determine whether the webhook event should be sent. If null, the filter always passes.                            | {<br/>"$and": [<br/>{<br/>"field": "parent_object_id",<br/>"operator": "equals",<br/>"value": "97052eb9-e65e-443f-a297-f2d9a4a7f795"<br/>}<br/>]<br/>} |