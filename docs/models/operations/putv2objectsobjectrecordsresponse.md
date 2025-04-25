# PutV2ObjectsObjectRecordsResponse

Success

## Example Usage

```typescript
import { PutV2ObjectsObjectRecordsResponse } from "attio-js/models/operations/putv2objectsobjectrecords.js";

let value: PutV2ObjectsObjectRecordsResponse = {
  data: {
    id: {
      workspaceId: "14beef7a-99f7-4534-a87e-70b564330a4c",
      objectId: "97052eb9-e65e-443f-a297-f2d9a4a7f795",
      recordId: "bf071e1f-6035-429d-b874-d83ea64ea13b",
    },
    createdAt: "2022-11-21T13:22:49.061281000Z",
    values: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                               | [operations.PutV2ObjectsObjectRecordsDataResponse](../../models/operations/putv2objectsobjectrecordsdataresponse.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |