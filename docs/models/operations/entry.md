# Entry

## Example Usage

```typescript
import { Entry } from "attio-js/models/operations/postv2comments.js";

let value: Entry = {
  list: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `list`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | If creating a top-level comment on a list entry, this is the slug or ID of that list. | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                  |
| `entryId`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | If creating a top-level comment on a list entry, this is the ID of that entry.        | 2e6e29ea-c4e0-4f44-842d-78a891f8c156                                                  |