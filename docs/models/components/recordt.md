# RecordT

The record the comment belongs to.

## Example Usage

```typescript
import { RecordT } from "attio-js/models/components/comment.js";

let value: RecordT = {
  recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
  objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `recordId`                                   | *string*                                     | :heavy_check_mark:                           | The ID of the record the comment belongs to. | bf071e1f-6035-429d-b874-d83ea64ea13b         |
| `objectId`                                   | *string*                                     | :heavy_check_mark:                           | The ID of the object the record belongs to.  | 97052eb9-e65e-443f-a297-f2d9a4a7f795         |