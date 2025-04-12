# PostV2ObjectsResponseBody

Success

## Example Usage

```typescript
import { PostV2ObjectsResponseBody } from "attio-js/models/operations";

let value: PostV2ObjectsResponseBody = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
    },
    apiSlug: "people",
    singularNoun: "Person",
    pluralNoun: "People",
    createdAt: "2022-11-21T13:22:49.061281000Z",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.ObjectT](../../models/components/objectt.md) | :heavy_check_mark:                                       | N/A                                                      |