# Id

## Example Usage

```typescript
import { Id } from "attio-js/models/components";

let value: Id = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `workspaceId`                                            | *string*                                                 | :heavy_check_mark:                                       | A UUID to identify the workspace this object belongs to. | 14beef7a-99f7-4534-a87e-70b564330a4c                     |
| `objectId`                                               | *string*                                                 | :heavy_check_mark:                                       | A UUID to identify the object.                           | 97052eb9-e65e-443f-a297-f2d9a4a7f795                     |