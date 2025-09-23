# PostV2TargetIdentifierAttributesAttributeStatusesRequest

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesAttributeStatusesRequest } from "attio-js/models/operations/postv2targetidentifierattributesattributestatuses.js";

let value: PostV2TargetIdentifierAttributesAttributeStatusesRequest = {
  target: "lists",
  identifier: "33ebdbe9-e529-47c9-b894-0ba25e9c15c0",
  attribute: "41252299-f8c7-4b5e-99c9-4ff8321d2f96",
  requestBody: {
    data: {
      title: "In Progress",
      celebrationEnabled: true,
      targetTimeInStatus: "P0Y0M1DT0H0M0S",
    },
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        | Example                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target`                                                                                                                                                           | [operations.PostV2TargetIdentifierAttributesAttributeStatusesTarget](../../models/operations/postv2targetidentifierattributesattributestatusestarget.md)           | :heavy_check_mark:                                                                                                                                                 | Whether the attribute is on an object or a list. Please note that company and person objects do not support status attributes at this time.                        | lists                                                                                                                                                              |
| `identifier`                                                                                                                                                       | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                | 33ebdbe9-e529-47c9-b894-0ba25e9c15c0                                                                                                                               |
| `attribute`                                                                                                                                                        | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                | 41252299-f8c7-4b5e-99c9-4ff8321d2f96                                                                                                                               |
| `requestBody`                                                                                                                                                      | [operations.PostV2TargetIdentifierAttributesAttributeStatusesRequestBody](../../models/operations/postv2targetidentifierattributesattributestatusesrequestbody.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |                                                                                                                                                                    |