# RecordReference

Configuration available for attributes of type "record-reference".

## Example Usage

```typescript
import { RecordReference } from "attio-js/models/components";

let value: RecordReference = {
  allowedObjectIds: [
    "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `allowedObjectIds`                                                                                                                 | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | A list of UUIDs to indicate which objects records are allowed to belong to. Leave empty to to allow records from all object types. |