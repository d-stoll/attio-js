# PutV2ObjectsObjectRecordsRequest

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsRequest } from "attio-js/models/operations";

let value: PutV2ObjectsObjectRecordsRequest = {
  object: "people",
  matchingAttribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  requestBody: {
    data: {
      values: {},
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | people                                                                                                             |
| `matchingAttribute`                                                                                                | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                                               |
| `requestBody`                                                                                                      | [operations.PutV2ObjectsObjectRecordsRequestBody](../../models/operations/putv2objectsobjectrecordsrequestbody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |