# PostV2ObjectsObjectRecordsQueryResponseBody

Success

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsQueryResponseBody } from "attio-js/models/operations";

let value: PostV2ObjectsObjectRecordsQueryResponseBody = {
  data: [
    {
      id: {
        workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
        objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
        recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
      },
      createdAt: "2022-11-21T13:22:49.061281000Z",
      values: {
        "key": "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.PostV2ObjectsObjectRecordsQueryData](../../models/operations/postv2objectsobjectrecordsquerydata.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |