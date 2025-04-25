# PostV2ObjectsRequest

## Example Usage

```typescript
import { PostV2ObjectsRequest } from "attio-js/models/operations/postv2objects.js";

let value: PostV2ObjectsRequest = {
  data: {
    apiSlug: "people",
    singularNoun: "Person",
    pluralNoun: "People",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.PostV2ObjectsData](../../models/operations/postv2objectsdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |