# PostV2TargetIdentifierAttributesAttributeStatusesData

## Example Usage

```typescript
import { PostV2TargetIdentifierAttributesAttributeStatusesData } from "attio-js/models/operations/postv2targetidentifierattributesattributestatuses.js";

let value: PostV2TargetIdentifierAttributesAttributeStatusesData = {
  title: "In Progress",
  celebrationEnabled: true,
  targetTimeInStatus: "P0Y0M1DT0H0M0S",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `title`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | The Title of the status                                                                   | In Progress                                                                               |
| `celebrationEnabled`                                                                      | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether arriving at this status triggers a celebration effect                             | true                                                                                      |
| `targetTimeInStatus`                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | Target time for a record to spend in given status expressed as a ISO-8601 duration string | P0Y0M1DT0H0M0S                                                                            |