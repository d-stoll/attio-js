# PostV2WebhooksSubscriptionRequest

## Example Usage

```typescript
import { PostV2WebhooksSubscriptionRequest } from "attio-js/models/operations/postv2webhooks.js";

let value: PostV2WebhooksSubscriptionRequest = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `eventType`                                                                                                            | [operations.PostV2WebhooksEventTypeRequest](../../models/operations/postv2webhookseventtyperequest.md)                 | :heavy_check_mark:                                                                                                     | Type of event the webhook is subscribed to.                                                                            | note.created                                                                                                           |
| `filter`                                                                                                               | *operations.PostV2WebhooksFilterRequestUnion*                                                                          | :heavy_check_mark:                                                                                                     | Filters to determine whether the webhook event should be sent. If null, the filter always passes.                      | {<br/>"$and": [<br/>{<br/>"field": "parent_object_id",<br/>"operator": "equals",<br/>"value": "97052eb9-e65e-443f-a297-f2d9a4a7f795"<br/>}<br/>]<br/>} |