# PatchV2ObjectsObjectRequest

## Example Usage

```typescript
import { PatchV2ObjectsObjectRequest } from "attio-js/models/operations/patchv2objectsobject.js";

let value: PatchV2ObjectsObjectRequest = {
  object: "people",
  requestBody: {
    data: {
      apiSlug: "people",
      singularNoun: "Person",
      pluralNoun: "People",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      | people                                                                                                   |
| `requestBody`                                                                                            | [operations.PatchV2ObjectsObjectRequestBody](../../models/operations/patchv2objectsobjectrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |