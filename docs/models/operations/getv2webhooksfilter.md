# GetV2WebhooksFilter

Filters to determine whether the webhook event should be sent. If null, the filter always passes.


## Supported Types

### `operations.GetV2WebhooksFilter1`

```typescript
const value: operations.GetV2WebhooksFilter1 = {
  dollarOr: [
    {
      field: "<value>",
      operator: "not_equals",
      value: "<value>",
    },
  ],
};
```

### `operations.GetV2WebhooksFilter2`

```typescript
const value: operations.GetV2WebhooksFilter2 = {
  dollarAnd: [
    {
      field: "parent_object_id",
      operator: "equals",
      value: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
  ],
};
```

