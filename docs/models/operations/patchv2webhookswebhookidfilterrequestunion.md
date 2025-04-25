# PatchV2WebhooksWebhookIdFilterRequestUnion

Filters to determine whether the webhook event should be sent. If null, the filter always passes.


## Supported Types

### `operations.PatchV2WebhooksWebhookIdFilterRequest1`

```typescript
const value: operations.PatchV2WebhooksWebhookIdFilterRequest1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "equals",
      value: "<value>",
    },
  ],
};
```

### `operations.PatchV2WebhooksWebhookIdFilterRequest2`

```typescript
const value: operations.PatchV2WebhooksWebhookIdFilterRequest2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

