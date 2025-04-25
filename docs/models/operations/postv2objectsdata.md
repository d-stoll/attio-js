# PostV2ObjectsData

## Example Usage

```typescript
import { PostV2ObjectsData } from "attio-js/models/operations/postv2objects.js";

let value: PostV2ObjectsData = {
  apiSlug: "people",
  singularNoun: "Person",
  pluralNoun: "People",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `apiSlug`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | A unique, human-readable slug to access the object through URLs and API calls. Should be formatted in snake case. | people                                                                                                            |
| `singularNoun`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The singular form of the object's name.                                                                           | Person                                                                                                            |
| `pluralNoun`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The plural form of the object's name.                                                                             | People                                                                                                            |