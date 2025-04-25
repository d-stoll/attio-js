# ObjectT

## Example Usage

```typescript
import { ObjectT } from "attio-js/models/components/object.js";

let value: ObjectT = {
  id: {
    workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
    objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  },
  apiSlug: "people",
  singularNoun: "Person",
  pluralNoun: "People",
  createdAt: "2022-11-21T13:22:49.061281000Z",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | [components.ObjectId](../../models/components/objectid.md)                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |
| `apiSlug`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | A unique, human-readable slug to access the object through URLs and API calls. Formatted in snake case. | people                                                                                                  |
| `singularNoun`                                                                                          | *string*                                                                                                | :heavy_check_mark:                                                                                      | The singular form of the object's name.                                                                 | Person                                                                                                  |
| `pluralNoun`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The plural form of the object's name.                                                                   | People                                                                                                  |
| `createdAt`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | When the object was created.                                                                            | 2022-11-21T13:22:49.061281000Z                                                                          |