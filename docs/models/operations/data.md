# Data

## Example Usage

```typescript
import { Data } from "attio-js/models/operations";

let value: Data = {
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