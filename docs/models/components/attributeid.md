# AttributeId

## Example Usage

```typescript
import { AttributeId } from "attio-js/models/components";

let value: AttributeId = {
  workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  attributeId: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `workspaceId`                                                        | *string*                                                             | :heavy_check_mark:                                                   | A UUID representing the workspace this attribute belongs to.         | 14beef7a-99f7-4534-a87e-70b564330a4c                                 |
| `objectId`                                                           | *string*                                                             | :heavy_check_mark:                                                   | A UUID to identify the object or list that this attribute belongs to | 97052eb9-e65e-443f-a297-f2d9a4a7f795                                 |
| `attributeId`                                                        | *string*                                                             | :heavy_check_mark:                                                   | A UUID to identify this attribute.                                   | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                 |