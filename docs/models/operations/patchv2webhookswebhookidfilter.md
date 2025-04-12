# PatchV2WebhooksWebhookIdFilter

Filters to determine whether the webhook event should be sent. If null, the filter always passes.


## Supported Types

### `operations.PatchV2WebhooksWebhookIdFilter1`

```typescript
const value: operations.PatchV2WebhooksWebhookIdFilter1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "not_equals",
      value: "<value>",
    },
  ],
};
```

### `operations.PatchV2WebhooksWebhookIdFilter2`

```typescript
const value: operations.PatchV2WebhooksWebhookIdFilter2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

