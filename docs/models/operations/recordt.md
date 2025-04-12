# RecordT

## Example Usage

```typescript
import { RecordT } from "attio-js/models/operations";

let value: RecordT = {
  object: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `object`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | If creating a top-level comment on a record, this is the slug or ID of that object. | 97052eb9-e65e-443f-a297-f2d9a4a7f795                                                |
| `recordId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | If creating a top-level comment on a record, this is the ID of that record.         | bf071e1f-6035-429d-b874-d83ea64ea13b                                                |