# Entry

The entry the comment belongs to, `null` for comments on records.

## Example Usage

```typescript
import { Entry } from "attio-js/models/components";

let value: Entry = {
  entryId: "2e6e29ea-c4e0-4f44-842d-78a891f8c156",
  listId: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `entryId`                                   | *string*                                    | :heavy_check_mark:                          | The ID of the entry the comment belongs to. | 2e6e29ea-c4e0-4f44-842d-78a891f8c156        |
| `listId`                                    | *string*                                    | :heavy_check_mark:                          | The ID of the list the entry belongs to.    | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0        |