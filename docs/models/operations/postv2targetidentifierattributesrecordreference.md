# PostV2TargetIdentifierAttributesRecordReference

Configuration available for attributes of type "record-reference".

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesRecordReference } from "attio-js/models/operations/postv2targetidentifierattributes.js";

let value: PostV2TargetIdentifierAttributesRecordReference = {
  allowedObjects: [
    "people",
  ],
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedObjects`                                                                                                                            | *string*[]                                                                                                                                  | :heavy_check_mark:                                                                                                                          | A list of slugs or UUIDs to indicate which objects records are allowed to belong to. Leave empty to to allow records from all object types. |