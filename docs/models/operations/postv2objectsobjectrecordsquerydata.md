# PostV2ObjectsObjectRecordsQueryData

## Example Usage

```typescript
import { PostV2ObjectsObjectRecordsQueryData } from "attio-js/models/operations/postv2objectsobjectrecordsquery.js";

let value: PostV2ObjectsObjectRecordsQueryData = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  },
  createdAt: "2022-11-21T13:22:49.061281000Z",
  values: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | [operations.PostV2ObjectsObjectRecordsQueryId](../../models/operations/postv2objectsobjectrecordsqueryid.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | When this record was created.                                                                                | 2022-11-21T13:22:49.061281000Z                                                                               |
| `values`                                                                                                     | Record<string, *any*>                                                                                        | :heavy_check_mark:                                                                                           | A record type with an attribute `api_slug` as the key, and an array of value objects as the values.          |                                                                                                              |