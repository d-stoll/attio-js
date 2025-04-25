# GetV2WebhooksId

## Example Usage

```typescript
import { GetV2WebhooksId } from "attio-js/models/operations/getv2webhooks.js";

let value: GetV2WebhooksId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  webhookId: "23e42eaf-323a-41da-b5bb-fd67eebda553",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `workspaceId`                                   | *string*                                        | :heavy_check_mark:                              | The ID of the workspace the webhook belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c            |
| `webhookId`                                     | *string*                                        | :heavy_check_mark:                              | The ID of the webhook.                          | 23e42eaf-323a-41da-b5bb-fd67eebda553            |