# PatchV2TargetIdentifierAttributesAttributeRecordReference

Configuration available for attributes of type "record-reference".

## Example Usage

```typescript
import { PatchV2TargetIdentifierAttributesAttributeRecordReference } from "attio-js/models/operations/patchv2targetidentifierattributesattribute.js";

let value: PatchV2TargetIdentifierAttributesAttributeRecordReference = {
  allowedObjects: [
    "people",
  ],
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowedObjects`                                                                                                                            | *string*[]                                                                                                                                  | :heavy_check_mark:                                                                                                                          | A list of slugs or UUIDs to indicate which objects records are allowed to belong to. Leave empty to to allow records from all object types. |