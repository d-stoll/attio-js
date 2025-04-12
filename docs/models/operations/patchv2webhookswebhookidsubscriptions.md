# PatchV2WebhooksWebhookIdSubscriptions

## Example Usage

```typescript
import { PatchV2WebhooksWebhookIdSubscriptions } from "attio-js/models/operations";

let value: PatchV2WebhooksWebhookIdSubscriptions = {
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
| `eventType`                                                                                                            | [operations.PatchV2WebhooksWebhookIdEventType](../../models/operations/patchv2webhookswebhookideventtype.md)           | :heavy_check_mark:                                                                                                     | Type of event the webhook is subscribed to.                                                                            | note.created                                                                                                           |
| `filter`                                                                                                               | *operations.PatchV2WebhooksWebhookIdFilter*                                                                            | :heavy_check_mark:                                                                                                     | Filters to determine whether the webhook event should be sent. If null, the filter always passes.                      | {<br/>"$and": [<br/>{<br/>"field": "parent_object_id",<br/>"operator": "equals",<br/>"value": "97052eb9-e65e-443f-a297-f2d9a4a7f795"<br/>}<br/>]<br/>} |