# PatchV2WebhooksWebhookIdFilterResponseUnion

Filters to determine whether the webhook event should be sent. If null, the filter always passes.


## Supported Types

### `operations.PatchV2WebhooksWebhookIdFilterResponse1`

```typescript
const value: operations.PatchV2WebhooksWebhookIdFilterResponse1 = {
  dollarOr: [],
};
```

### `operations.PatchV2WebhooksWebhookIdFilterResponse2`

```typescript
const value: operations.PatchV2WebhooksWebhookIdFilterResponse2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

